$(function () {
    $('#awsAccountAdd').click(function () {
        var projectCode = $('#projectCode').val();
        var awsAccountId = $('#awsAccountId').val();
        var awsAccountRole = $('#awsAccountRole').val();
        var textDisplay = $('#textDisplay').val();        

        if (projectCode.length != 0 || 
            awsAccountId.length != 0 ||
            awsAccountRole.length != 0 ||
            textDisplay.length != 0 ) {
                var awsAccId = awsAccountId;
                var awsAccData = JSON.stringify({'projectCode':projectCode,
                                  'awsAccountId':awsAccountId,
                                  'awsAccountRole': awsAccountRole,
                                  'textDisplay': textDisplay
                                });
            var awsObj = {};
            awsObj[awsAccId] = awsAccData;
            chrome.storage.local.set(awsObj, function () {
                console.log('A new account/role was added successful! '+awsAccData);                     
            });

           close();
        }
    });   
});