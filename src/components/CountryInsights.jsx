import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CountryInsights = ({ data }) => {
    // Process country data
    const countryData = data.reduce((acc, movie) => {
        movie.country.forEach((country) => {
            acc[country] = (acc[country] || 0) + 1;
        });
        return acc;
    }, {});

    const countryChartData = Object.keys(countryData).map((key) => ({
        name: key,
        value: countryData[key],
    }));

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFD", "#FF6666"];

    return (
        <div className="mb-4">
            {/* Country Pie Chart */}
            <h5 className="text-muted mb-3"><i className="fa-solid fa-city me-2"></i>Country Insights</h5>
            <div className="card">
                <div className="card-body">
                    <div style={{ width: "100%", height: "375px" }}>

                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={countryChartData}
                                    dataKey="value"
                                    isAnimationActive={true}
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    label
                                >
                                    {countryChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend
                                    layout="horizontal"
                                    align="center"
                                    verticalAlign="bottom"
                                    iconType="circle"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInsights;
