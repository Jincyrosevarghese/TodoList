let count = 0;
$(document).ready(function (e) {
    $.getJSON('https://jsonplaceholder.typicode.com/todos', function (data, textStatus, jqXHR) {
        //alert(data[0].title);
        let result = data;
        let divdata = ""
        for (var i = 0; i < result.length; i++) {
            divdata += `<div><input id=${result[i].id} checked=${result[i].completed === 1 ? true : false} type="checkbox"  />${result[i].title}</div>`;
            appendfn(result[i].id, result[i].completed, result[i].title);

        }
        //$('#container').html(divdata);
    })
        .done(function () { console.log('Request done!'); })
        .fail(function (jqxhr, settings, ex) { alert('failed, ' + ex); });
    appendfn = (key, value, title) => {
        $('#container2')
            .append(`<input type="checkbox" id= ${key} onclick="" value=${value}>`)
            .append(`<label for= ${key}>${title}</label></div>`)
            .append(`<br>`);
        if (value) {
            document.getElementById(key).checked = value;
            document.getElementById(key).disabled = value;
        }
    }
    $('body').on('change', 'input[type="checkbox"]', function (e) {
        var p = new Promise(function (resolve, reject) {

            if ($(this).siblings(':checked').length > 5) {
                this.checked = false;
            }
            if (e.target.checked && count <= 5) {
                count++;
                // alert(count);
            }
            else if (!e.target.checked) {
                count--;
            }
            if (count < 5) {
                resolve(count)
            }
            else {
                reject('ERROR , Reached max limit')
            }
        });
        p.then(function (res) {
            $('#resulttext').html(`${count} out of 5 selected, ${5 - count} pending`);
        }).catch(function (e) {
            alert("Congrats. 5 Tasks have been Successfully Completed");
        });

    });
    
});