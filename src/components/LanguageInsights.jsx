import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LanguageInsights = ({ data }) => {
    // Process language data
    const languageData = data.reduce((acc, movie) => {
        movie.language.forEach((lang) => {
            acc[lang] = (acc[lang] || 0) + 1;
        });
        return acc;
    }, {});

    // Prepare data for both language and country
    const languageChartData = Object.keys(languageData).map((key) => ({
        name: key,
        value: languageData[key],
    }));

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFD", "#FF6666"];

    return (
        <div className="mb-4">
            {/* Language Pie Chart */}
            <h5 className="text-muted mb-3"><i className="fa-brands fa-dropbox me-2"></i>Language Insights</h5>
            <div className="card">
                <div className="card-body">
                    <div style={{ width: "100%", height: "350px"}} className="mb-4">

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
        </div>
    );
};

export default LanguageInsights;
