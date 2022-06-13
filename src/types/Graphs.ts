export interface BarGraphProps {
  series: [{ data: number[] }];
  options: {
    chart: {
      toolbar: {
        show: boolean;
        tools: {
          download: boolean;
          selection: boolean;
          zoom: boolean;
          zoomin: boolean;
          zoomout: boolean;
          pan: boolean;
          reset: boolean;
        };
      };
    };
    plotOptions: {
      bar: {
        borderRadius: number;
        horizontal: boolean;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    xaxis: {
      categories: string[];
    };
  };
}

export interface ScatterGraphProps {
  series: [
    { name: string; data: [number, number][] },
    { name: string; data: [number, number][] },
    { name: string; data: [number, number][] }
  ];
  options: {
    chart: {
      toolbar: {
        show: boolean;
        tools: {
          download: boolean;
          selection: boolean;
          zoom: boolean;
          zoomin: boolean;
          zoomout: boolean;
          pan: boolean;
          reset: boolean;
        };
      };
    };
    xaxis: {
      tickAmount: number;
      labels: {
        formatter: (
          value: string,
          timestamp?: number | undefined,
          opts?: any
        ) => string | string[];
      };
    };
    yaxis: {
      tickAmount: number;
    };
  };
}
