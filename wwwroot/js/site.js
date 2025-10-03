function graphSummaryData(data, target) {

    var chart = bb.generate({
        bindto: target,
        data: {
            x: "x",
            type: "bar",
            columns: data,
            colors: {
                "IBv1": "#1f77b4",      // Blue
                "evIB100": "#ff7f0e",    // Orange  
                "evIB200": "#2ca02c"     // Green
            }
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    format: "%Y-%m-%d"
                }
            }
        },
        bar: {
            width: {
                ratio: 0.8
            }
        }
    });
}
