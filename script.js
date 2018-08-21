

function changeMethod () {
    var selected = document.querySelector('input[name="gpa-type"]:checked').value ;
    
    if ( selected == "gpa" ) {
        $("#points-text").prop("disabled", true);
        $("#gpa-text").prop("disabled" , false ); 
    } else {
        $("#points-text").prop("disabled", false);
        $("#gpa-text").prop("disabled" , true ); 
    }
    
    calculateGPA() ; 
}


// the most important function 
function calculateGPA () {
    
    var subjects = []; 
    subjects[0] = getPoints("first") ; 
    subjects[1] = getPoints("second") ; 
    subjects[2] = getPoints("third") ; 
    subjects[3] = getPoints("forth") ; 
    subjects[4] = getPoints("fifth") ; 
    subjects[5] = getPoints("sixth") ; 
    subjects[6] = getPoints("seventh") ; 
    subjects[7] = getPoints("eighth") ; 

    var hours = getHours () ;
    
    var sum = 0 ; 
    var countSubjects = 0 ; 
    
    for ( var i = 0 ; i < 8 ; i++ ) {
        if ( subjects[i] != 0 ) { 
            sum += subjects[i] ; 
            countSubjects++;
        }
    }
    
    
    var currentGPA = sum /  hours  ; 
    var statement = getStatement ( currentGPA ) ; 

    
    document.getElementById("currentGPA").innerHTML = currentGPA.toFixed(2) ; 
    document.getElementById("currentPoints").innerHTML = sum.toFixed(2) ; 
    document.getElementById("currentStatment").innerHTML = statement ; 
    
    
    
    var previousHours = parseFloat ( document.getElementById("hours-text").value )  ; 
    var previousGPA =  parseFloat ( document.getElementById("gpa-text").value )  ; 
    var previousPoints =  parseFloat ( document.getElementById("points-text").value )   ; 
    
    
    
    var totalGPA = 0.0 ; 
    var totalPoints = 0.0 ; 
    var totalHours = 0 ; 
    
    
    var selected = document.querySelector('input[name="gpa-type"]:checked').value ;

    if ( document.getElementById("hours-text").value != ""  ) {
        
        if ( selected == "gpa" && document.getElementById("gpa-text").value != "" ) {
            
            totalHours = hours + previousHours ;
            totalPoints = ( previousGPA * previousHours ) + ( sum ) ; 
            totalGPA = ( totalPoints / totalHours ) ;

            document.getElementById("totalPoints").innerHTML = totalPoints.toFixed(2) ; 
            document.getElementById("totalGPA").innerHTML =  totalGPA.toFixed(2) ; 
            document.getElementById("totalStatememt").innerHTML = getStatement( totalGPA )  ;
            
        }
        
        else if ( document.getElementById("points-text").value != "" ) {

            totalHours = hours + previousHours ;
            totalPoints = previousPoints + sum ; 
            totalGPA = ( totalPoints / totalHours ) ;
    
            document.getElementById("totalPoints").innerHTML = totalPoints.toFixed(2) ; 
            document.getElementById("totalGPA").innerHTML =  totalGPA.toFixed(2) ; 
            document.getElementById("totalStatememt").innerHTML = getStatement( totalGPA )  ;
        }
        
    }
    
    if ( document.getElementById("totalGPA").innerHTML == 'NaN') { 
            document.getElementById("totalPoints").innerHTML = "-" ; 
            document.getElementById("totalGPA").innerHTML =  "-" ; 
            document.getElementById("totalStatememt").innerHTML = "-" ;
    }
    
    if ( document.getElementById("totalGPA").innerHTML == 'NaN') { 
            document.getElementById("currentGPA").innerHTML = "-" ; 
            document.getElementById("currentPoints").innerHTML = "-" ; 
            document.getElementById("currentStatment").innerHTML = "-" ; 
    }
    
    
    
}

function getStatement ( gpa ) { 
    if ( gpa > 4.75 ) 
        return "ممتاز مرتفع";
    else if ( gpa > 4.50 ) 
        return "ممتاز";
    else if ( gpa > 4.00 ) 
        return "جيد جداً مرتفع";
    else if ( gpa > 3.50 ) 
        return "جيد جدأ"; 
    else if ( gpa > 3.00 ) 
        return "جيد مرتفع";
    else if ( gpa > 2.5 )
        return "جيد" ;
    else if ( gpa > 2 ) 
        return "مقبول مرتفع ";
    else 
        return "مقبول" ;
}   

function getHours () {
    
    var hours = 0 ;
    
    if ( $("#first-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "first-hour").value ) ;
    }
    
    if ( $("#second-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "second-hour").value ) ;
    }
    
    if ( $("#third-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "third-hour").value ) ;
    }
    
    if ( $("#forth-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "forth-hour").value ) ;
    }
    
    if ( $("#fifth-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "fifth-hour").value ) ;
    }
    
    if ( $("#sixth-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "sixth-hour").value ) ;
    }
    
    if ( $("#seventh-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "seventh-hour").value ) ;
    }
    
    if ( $("#eighth-checkbox").is(":checked") == true  ) { 
        hours+= parseFloat( document.getElementById( "eighth-hour").value ) ;
    }
    
    
    return hours ;

}
    

function getPoints ( string ) {
    var hours = document.getElementById( string + "-hour").value ;
    var hoursNumber = parseFloat(hours); 
    var grade = document.getElementById( string + "-grade").value ;
    var gradeFloat = getGradePoint(grade) ; 
    
    
    
    if ( $("#"+string+"-checkbox").is(":checked") == false  )
        return 0 ; 
    else {
        return gradeFloat * hoursNumber ; 
    }
}


function getGradePoint ( string ) {
    switch ( string ) {
        case "A+" : 
            return 5.00 ; 
        case "A" :
            return 4.75 ;
        case "B+" :
            return 4.50 ; 
        case "B" :
            return 4.00 ; 
        case "C+" : 
            return 3.50 ; 
        case "C" :
            return 3.00 ; 
        case "D+" :
            return 2.50 ; 
        case "D" :
            return 2.00 ; 
    }
}




$(document).ready(function(){
    $("#first-checkbox").on("click" , function(){
        var isChecked = $("#first-checkbox").is(":checked");
        if (isChecked) {
            $("#first-row :input").prop("disabled", false );
            
        } else {
            $("#first-row :input").prop("disabled", true);
            $("#first-checkbox").prop("disabled" , false );
        }
    });
    
    $("#second-checkbox").on("click" , function(){
        var isChecked = $("#second-checkbox").is(":checked");
        if (isChecked) {
            $("#second-row :input").prop("disabled", false );
            
        } else {
            $("#second-row :input").prop("disabled", true);
            $("#second-checkbox").prop("disabled" , false ) ; 
        }
    });
    
    
    $("#third-checkbox").on("click" , function(){
        var isChecked = $("#third-checkbox").is(":checked");
        if (isChecked) {
            $("#third-row :input").prop("disabled", false);
        } else {
            $("#third-row :input").prop("disabled", true);
            $("#third-checkbox").prop("disabled" , false) ; 
        }
    });
    
    $("#forth-checkbox").on("click" , function(){
        var isChecked = $("#forth-checkbox").is(":checked");
        if (isChecked) {
            $("#forth-row :input").prop("disabled", false );
            
        } else {
            $("#forth-row :input").prop("disabled", true);
            $("#forth-checkbox").prop("disabled" , false );
        }
    });
    
    $("#fifth-checkbox").on("click" , function(){
        var isChecked = $("#fifth-checkbox").is(":checked");
        if (isChecked) {
            $("#fifth-row :input").prop("disabled", false  );
            
        } else {
            $("#fifth-row :input").prop("disabled", true);
            $("#fifth-checkbox").prop("disabled" , false ); 
        }
    });

    $("#sixth-checkbox").on("click" , function(){
        var isChecked = $("#sixth-checkbox").is(":checked");
        if (isChecked) {
            $("#sixth-row :input").prop("disabled", false  );
            
        } else {
            $("#sixth-row :input").prop("disabled", true);
            $("#sixth-checkbox").prop("disabled" , false ); 
        }
    });
    
    $("#seventh-checkbox").on("click" , function(){
        var isChecked = $("#seventh-checkbox").is(":checked");
        if (isChecked) {
            $("#seventh-row :input").prop("disabled", false  );
            
        } else {
            $("#seventh-row :input").prop("disabled", true);
            $("#seventh-checkbox").prop("disabled" , false ); 
        }
    });
    
    $("#eighth-checkbox").on("click" , function(){
        var isChecked = $("#eighth-checkbox").is(":checked");
        if (isChecked) {
            $("#eighth-row :input").prop("disabled", false  );
            
        } else {
            $("#eighth-row :input").prop("disabled", true);
            $("#eighth-checkbox").prop("disabled" , false ); 
        }
    });
});
