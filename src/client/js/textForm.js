function textSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let text = document.getElementById('test-statement').value;
    console.log(text)
    if(!text){return;}
    fetch("/text",{
        method:"POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({text}),
    }).then(res=>
        res.json()
    )
    .then(function(data){
        console.log(data)
        document.getElementById('polarity').innerHTML = data.polarity;
        document.getElementById('confidence').innerHTML = data.polarity_confidence;
        document.getElementById('subjectivity').innerHTML = data.subjectivity;
    });
}

export{textSubmit}