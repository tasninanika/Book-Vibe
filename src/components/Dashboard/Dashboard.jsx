import { useContext } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { ReadListContext } from "../../Context/ReadListProvider";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Dashboard = () => {
  const { readList } = useContext(ReadListContext);

  if (!readList || readList.length === 0) {
    return <p className="text-center my-10">No data available to display.</p>;
  }

  return (
    <div className="flex justify-center my-10">
      <BarChart
        width={600}
        height={350}
        data={readList}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="green" />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Dashboard;
