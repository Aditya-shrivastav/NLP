function urlSubmit(event) {
    event.preventDefault()
    const urlText = document.getElementById('test-url').value;
    if(!urlText){return;}
    console.log(urlText)
    fetch('/url',{
        method:'POST',
        mode:"cors",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({text:urlText})
    }).then(res=>
        res.json()
    )
    .then(function(data){
        document.getElementById('url-polarity').innerHTML = data.polarity;
        document.getElementById('url-confidence').innerHTML = data.polarity_confidence;
        document.getElementById('url-subjectivity').innerHTML = data.subjectivity;
    });
}

export{urlSubmit}