student_array = []

function submit()
{
    var display_student_array = []

    for(j=1; j<=4; j++)
    {
        var name_of_student = document.getElementById("name_of_the_student_" + j).value;
        console.log(name_of_student);
        student_array.push(name_of_student);
        console.log(student_array);
    }
    student_array_length = student_array.length;

    for(k=0; k<student_array_length; k++)
    {
        display_student_array.push("<h4> Name - " + student_array[k] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    new_student_array = display_student_array.join("  ");
    document.getElementById("display_name_without_commas").innerHTML = new_student_array;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    student_array.sort();
    var display_student_array = [];

    student_array_length = student_array.length;

    for(k=0; k<student_array_length; k++)
    {
        display_student_array.push("<h4> Name - " + student_array[k] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    new_student_array = display_student_array.join("  ");
    document.getElementById("display_name_without_commas").innerHTML = new_student_array;
}