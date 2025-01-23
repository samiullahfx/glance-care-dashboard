import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const OscarOverview = ({ data }) => {
  const chartData = data.map((movie) => ({
    name: movie.title,
    Nominations: movie.oscar_nominations,
    Wins: movie.oscar_winning,
  }));

  return (
    <div className="mb-4">
      <h5 className="text-muted mb-3"><i className="fa fa-award me-2"></i>Oscar Statistics</h5>
      <div className="card">
                <div className="card-body">
      <div style={{ width: "100%", height: "375px" }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Nominations" fill="#0088FE" />
            <Bar dataKey="Wins" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
      </div>
    </div>
  );
};

export default OscarOverview;
