$(document).ready(function () {
    $.get(
        "/package.json",
        function (data) {
            for (let i = 0; i < data.Item.length; i++) {
                $('table').append(`
                <tr>
                    <td>${data.Item[i].name}</td>
                    <td>${data.Item[i].status}</td>
                    <td>${data.Item[i].device}</td>
                    <td>${data.Item[i].downloadURL.length > 1 ? GenerateMoreButton(data.Item[i].downloadURL, data.Item[i].btnName) : `<a class="btn btn-outline-primary btn-block" href="${data.Item[i].downloadURL[0]}" role="button">${data.Item[i].btnName[0]}</a>`}</td>
                    <td>${data.Item[i].comment}</td>
                </tr>`);
            }
        }
    )
});


function GenerateMoreButton(data, btnName)
{
    if(data.length != btnName.length)
    {
        console.log(
            "%cError! %c: The number of downloadURL and btnName is not equal!",
            "color:red;font-family:system-ui;font-size:24px;-webkit-text-stroke: 1px black;font-weight:bold",
            ""
        );
        return "<h6>Button and Data length is not equal</h6>";
    }
    let button = "";
    for (let i = 0; i < data.length; i++)
    {
        button += `<a class="btn btn-outline-primary btn-block" href="${data[i]}" role="button">${btnName[i]}</a>${i != data.length - 1 ? "<br>" : ""}`;
    }
    return button;
}