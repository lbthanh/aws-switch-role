// function openLink(e) {
//     chrome.tabs.create({url:e.target.href})
// }

function loadRoles(fileName) {
    console.log('Loading file ...' + fileName);
    var filePath = chrome.runtime.getURL(fileName);    
    $.ajax({
            type: "GET",
            url: filePath,
            dataType: "text",
            success: function (csvData) { 
                processCsvData(csvData); 
            }
    });    
}

function processCsvData(csvData) {
    var allRecords = csvData.split(/\r\n|\n/);    
    // var records = [];

    for (var i = 0; i < allRecords.length; i++) {
        var row = allRecords[i].split(',');        
        generateHtmlRoleList(row);        
    }
}

// CSV format: 
//    project_code, aws_account_id, aws_account_role, display_name    , env 
//Ex: your-code       , 000000006999  , your-role      , your-code@your-role, development
function generateHtmlRoleList(awsAccount) {    
    let newData = "<li><a href=\"https://signin.aws.amazon.com/switchrole?account="+ awsAccount[1]+ "&roleName="+ awsAccount[2] + "&displayName="+awsAccount[3]+"\" target=_blank >"+awsAccount[3]+"</a></li>";
    if (awsAccount[4] == 'development') {
        let currentData = $("#development_accounts").html();
        $("#development_accounts").html(currentData + newData);
    } 
    if (awsAccount[4] == 'production') {
        let currentData = $("#production_accounts").html();
        $("#production_accounts").html(currentData + newData);
    } 
}