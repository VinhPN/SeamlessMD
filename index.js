$(document).ready(function(){

  //AJAX call to obtain JSON file
    $.ajax({
      dataType: "json",
      url: "patient.json",
      success: function(patient){

        //Get name, organization, gender, conditions
        var name = patient.text.div;
        var org = patient.managingOrganization.display;
        var gender = patient.gender;
        var numConditions = patient.conditions.length;

        //Create an HTML list with the conditions
        var conditions = "<ul class='display-list'>";
        for(var i = 0; i < numConditions; i++){
          conditions += "<li>"+patient.conditions[i]+"</li>";
        }

        //Create columns
        var data = createColumn(name);
        data += createColumn(org);
        data += createColumn(gender);
        data += createColumn(numConditions);
        data += createColumn(conditions);
        
        //Create row and add it to the table
        $(".display-body").append(createRow(data,patient.id));

      }
    })
    function createRow(columns, id){
      return "<tr id="+id+">"+columns+"</tr>";
    }
    function createColumn(data){
      return "<td class='display-column'>"+data+"</td>";
    }
});