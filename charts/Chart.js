import { PieChart, LineChart } from "react-native-chart-kit";

const chartConfig={
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 0.6) => `0,0,0,${opacity}`,
  // strokeWidth: 2, // optional, default 3
  // barPercentage: 0.5,
  // useShadowColorFromDataset: false 
}

const genderData = [
    {
      name: "Female",
      population: 176,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Male",
      population: 92,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];
  const expenseData = [
    {
      name: "Expenses",
      population: 210000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Income",
      population: 620000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];
  const routeCollectionData = [
    {
      name: "Mukurwe-ini",
      population: 17600,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Tetu",
      population: 6120,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Mathira",
      population: 8900,
      color: "#add8e6",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Nyeri-Town",
      population: 5630,
      color: "#ffbbc1",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Othaya",
      population: 11489,
      color: "#fffbc8",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Kieni",
      population: 4300,
      color: "#abf7b1",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];
  const collectionData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satruday", "Sunday"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 34],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["Rainy Days"]
  };

  export function CollectionChart() {
    return(
      <LineChart
        data={collectionData}
        width="100%"
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
        }}
      />
    )
  }
  export function GenderPie() {
    return(
        <PieChart
            data={genderData}
            width="100%"
            height={220}
            chartConfig = {chartConfig}
            style = {{
              color: chartConfig.color()
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 50]}
            absolute
        />
    )
  }
  export function ExpensesPie() {
    return(
        <PieChart
            data={expenseData}
            width="100%"
            height={220}
            chartConfig={{
              backgroundColor: "#e26a00",
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 50]}
            absolute
        />
    )
  }
  export function RouteCollectionPie() {
    return(
        <PieChart
            data={routeCollectionData}
            width="100%"
            height={220}
            chartConfig={{
              backgroundColor: "#e26a00",
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 50]}
            absolute
        />
    )
  }
  