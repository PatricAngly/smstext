async function QuickEasySMS() {
    event.preventDefault();
    const form = event.target;
    const to = form.querySelector('[name=to]').value;
    const msg = form.querySelector('[name=msg]').value;
    const result = await fetch("https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms?from=Patric&to=46737345086", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
            "x-rapidapi-key": "737b2e1515msh0df4203325b8e5bp1a99a2jsn6365e1b8868a",
            "content-type": "application/json"
        },
        "body": JSON.stringify({
            "message": msg,
            "toNumber": to,
        })
    });
    const body = await result.json();
    console.log(body);
    alert(body.StatusCode === 0
        ? 'Code sent!'
        : 'Something went wrong. Check dev console.');
}