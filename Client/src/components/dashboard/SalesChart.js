import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Importers",
        data: [0, 5, 10, 100, 120, 121, 130, 180],
      },
      {
        name: "Sellers",
        data: [0, 1, 20, 90, 99, 100, 109, 110],
      },
      {
        name: "Transporters",
        data: [0, 30, 42, 50, 51, 57, 60, 74],
      },
      {
        name: "Visitors",
        data: [0, 22, 27, 500, 51, 55, 56, 60],
      },
      {
        name: "Guides",
        data: [10, 50, 50, 60, 80, 170, 500, 800],
      }
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Users informations Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly users informations report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
