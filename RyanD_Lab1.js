    //Fiddle Link: https://jsfiddle.net/drisryp/8xrb026g/49/
    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['phase1', 'Initiation', new Date(2022, 0, 10), new Date(2022, 0, 17), null,  100,  null],
        ['phase2', 'Planning', new Date(2022, 0, 17),new Date(2022, 0, 26), null, 25, 'phase1'],
        ['phase3', 'Execution', new Date(2022, 1, 3), new Date(2022, 1,30 ),null, 0, 'phase2'],
        ['phase3.1', 'Analysis ', new Date(2022, 1, 3), new Date(2022, 1,8 ),null, 0, 'phase2'],
        ['phase3.2', 'Design ', new Date(2022, 1, 8), new Date(2022, 1,12 ),null, 0, 'phase3.1'],
        ['phase3.3', 'Code ', new Date(2022, 1, 12), new Date(2022, 1,20 ),null, 0, 'phase3.2'],
        ['phase3.4', 'Test ', new Date(2022, 1, 21), new Date(2022, 1,25 ),null, 0, 'phase3.3'],
        ['phase3.5', 'Deploy ', new Date(2022, 1, 26), new Date(2022, 1,30 ),null, 0, 'phase3.4'],
        ['phase4', 'Evaluation', new Date(2022, 2, 2), new Date(2022, 2, 10),null, 0, 'phase3, phase3.5'],
       	['phase5', 'Closing', new Date(2022, 2, 22), new Date(2022, 2, 25),null, 0, 'phase4']
      ]);

      var options = {
        height: 500,
        gantt: {
            criticalPathEnabled: true,
            criticalPathStyle: {
              stroke: '#e64a19',
              strokeWidth: 5
            }
           }
        //width: 50000
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
