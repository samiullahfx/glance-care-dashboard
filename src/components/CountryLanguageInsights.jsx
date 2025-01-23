import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CountryLanguageInsights = ({ data }) => {
    // Process language data
    const languageData = data.reduce((acc, movie) => {
        movie.language.forEach((lang) => {
            acc[lang] = (acc[lang] || 0) + 1;
        });
        return acc;
    }, {});

    // Process country data
    const countryData = data.reduce((acc, movie) => {
        movie.country.forEach((country) => {
            acc[country] = (acc[country] || 0) + 1;
        });
        return acc;
    }, {});

    // Prepare data for both language and country
    const languageChartData = Object.keys(languageData).map((key) => ({
        name: key,
        value: languageData[key],
    }));

    const countryChartData = Object.keys(countryData).map((key) => ({
        name: key,
        value: countryData[key],
    }));

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFD", "#FF6666"];

    return (
        <div className="mb-4">
            {/* <h3 className="text-secondary mb-3">Country & Language Insights</h3> */}

            {/* Language Pie Chart */}
            <h3 className="text-muted">Language Distribution</h3>
            <div className="card">
                <div className="card-body">
                    <div style={{ width: "100%", height: "300px", marginBottom: "20px" }} className="mb-4">

                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={languageChartData}
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
                                    {languageChartData.map((entry, index) => (
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
            <br />
            {/* Country Pie Chart */}
            <h3 className="text-muted">Country Distribution</h3>
            <div className="card">
                <div className="card-body">
                    <div style={{ width: "100%", height: "300px" }}>

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

export default CountryLanguageInsights;
