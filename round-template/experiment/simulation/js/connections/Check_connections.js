checkSymIdentifications = function(component, actuator, jsonarray) {

	var temp = JSON.parse(jsonarray);

	var connData = {};

	if (temp.length != 0) {

//		if (selectedOp == "1") {
			Identify_Symbol(component, actuator, jsonarray);
//		}else if(selectedOp == "2"){
//			Identify_Indirect_SAC_Symbol(component, actuator, jsonarray);
//		}

//		connData.selectedOp = selectedOp;
		connData.component = component;
		connData.actuator = actuator;
		connData.connDiagjson = jsonarray;
		connData.chkIdenCnt = IdenFlagCnt;
		connData.chkIdenConn = rightIden;
//		connData.multiSelFlagCnt = multiSelectFlagCnt;
//				    console.log(connData);
//		ExpTrackData.connData = connData
//					console.log(ExpTrackData);

	} else {
		alertify.alert("Please select right symbol to identify");
	}
}

checkConnections = function(component, actuator, jsonarray) {

	var temp = JSON.parse(jsonarray);

	var connData = {};

	if (temp.length != 0) {

//		if (selectedOp == "1") {
			check_Connections(component, actuator, jsonarray);
//		}else if(selectedOp == "2"){
//			inDirect_SAC_Connections(component, actuator, jsonarray);
//		}
			

//		connData.selectedOp = selectedOp;
		connData.component = component;
		connData.actuator = actuator;
		connData.connDiagjson = jsonarray;
		connData.chkConnCnt = ConnFlagCnt;
		connData.chkRightConn = rightConn;
//				    console.log(connData);
//		ExpTrackData.connData = connData
//					console.log(ExpTrackData);

	} else {
		alertify.alert("Please select right symbol to identify");
	}
}
