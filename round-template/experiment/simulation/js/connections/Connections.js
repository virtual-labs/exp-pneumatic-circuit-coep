//Identify Symbols for Transfer block from magazine
Identify_Symbol = function(component, actuator,
		jsonarray) {
	
	checkRight = 0;

	checkWrong = 0;

	var temp = JSON.parse(jsonarray);

//	console.log(temp);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.SetFigure") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.SetFigure") {

				if ((temp[i].id == "pushBtn") || (temp[i].id == "springSym")
						|| (temp[i].id == "DCNormalClose3_20") || (temp[i].id == "DCNormalClose3_21")|| (temp[i].id == "DCNormalClose3_22")
						|| (temp[i].id == "sacSpring") || (temp[i].id == "servUnit") || (temp[i].id == "exaust") || (temp[i].id == "quickExstValve")) {

					temp1++;

				} else {
					checkWrong = 1;
					CheckWrongIdentification();
					break;
				}
			}
		}

		if(temp1 < 8 && checkWrong == 0){alert("Select all required component"); if(multiSelectFlagCnt >= 8){app.toolbar.hintButton.show();}}
		
		if (temp1 == 8) {
			checkRight = 1;
		} else {
			checkWrong = 1;
		}

		CheckRightIdentification();

	} else {

		alertify.alert("Please select right symbol to identify");
	}
}

CheckRightIdentification = function() {
	multiSelectFlagCnt++;
	if (checkRight == 1
			&& checkWrong == 0) {

		alertify
				.alert("Identification is successful. <br/> Please connect your port connection");
		app.toolbar.checkButton.show();
//		app.toolbar.characterisation_Button.show();
		// app.toolbar.characterisation_Button.hide();
		rightIden = 1;

	} else {
		
		if (checkWrong == 0) {

			if (IdenFlagCnt == 3) {
//				app.toolbar.hintButton.show();
				alertify.alert("Wrong identification");
				rightIden = 0;
			} else {

				alertify.alert("Wrong identification");
				IdenFlagCnt++
				rightIden = 0;
			}
		}
	}
}

CheckWrongIdentification = function() {

	if (IdenFlagCnt == 3) {
		app.toolbar.hintButton.show();

		alertify.alert("Wrong identification");
		rightIden = 0;
	} else {
		if (checkWrong == 1) {

			alertify.alert("Wrong identification");
			IdenFlagCnt++;
			rightIden = 0;
		}
	}
}


//Checking Port Connections Transfer block from magazine

check_Connections = function(component, actuator,
		jsonarray) {

	actToValveFlag = 0, springToValveFlag = 0, frlToValveFlag = 0, exaustToValveFlag = 0, wrongConnection = 0, 
	valveToQuickExaustFlag = 0, quickExaustToCylinderFlag = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.Connection") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.Connection") {

				if ((temp[i].source.port == "pushBtnPortName" && temp[i].target.port == "DCNormalClose3_2Port1Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port1Name" && temp[i].target.port == "pushBtnPortName")) {
					actToValveFlag = 1;
				} else if ((temp[i].source.port == "springSymPort1Name" && temp[i].target.port == "DCNormalClose3_2Port4Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port4Name" && temp[i].target.port == "springSymPort1Name")) {
					springToValveFlag = 1;
				} else if ((temp[i].source.port == "sacSpringPortName" && temp[i].target.port == "quickExstValvePort1Name")
						|| (temp[i].source.port == "quickExstValvePort1Name" && temp[i].target.port == "sacSpringPortName")) {
					quickExaustToCylinderFlag = 1;
				}else if ((temp[i].source.port == "DCNormalClose3_2Port3Name" && temp[i].target.port == "quickExstValvePort2Name")
						|| (temp[i].source.port == "quickExstValvePort2Name" && temp[i].target.port == "DCNormalClose3_2Port3Name")) {
					valveToQuickExaustFlag = 1;
				}else if ((temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCNormalClose3_2Port6Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port6Name" && temp[i].target.port == "servUnitPortName")) {
					frlToValveFlag = 1;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCNormalClose3_2Port5Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port5Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveFlag = 1;
				}else {
					wrongConnection = 1;
					CheckWrongConnection();
					break;
				}
			}
		}
		checkRightConnection();
	} else {
		alertify.alert("Do Some Connection");
	}
}

checkRightConnection = function() {
//	console.log(actToValveFlag + " " + springToValveFlag + " " + valveToQuickExaustFlag + " " + quickExaustToCylinderFlag);
	if (actToValveFlag == 1 && springToValveFlag == 1 && frlToValveFlag == 1 && exaustToValveFlag == 1
			&& quickExaustToCylinderFlag == 1 && valveToQuickExaustFlag == 1 && wrongConnection == 0) {

		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
		//	app.toolbar.characterisation_Button.hide();
		rightConn = 1;

	} else {
		if (wrongConnection == 0) {

			if (ConnFlagCnt == 3) {
				app.toolbar.hintButton1.show();
				alertify.alert("Wrong Connection");
				rightConn = 0;
			} else {

				alertify.alert("Wrong Connection");
				ConnFlagCnt++
				rightConn = 0;
			}
		}
	}
}	

CheckWrongConnection = function() {

	if (ConnFlagCnt == 3) {
		app.toolbar.hintButton1.show();

		alertify.alert("Wrong Connection");
		rightConn = 0;

	} else {

		if (wrongConnection == 1) {
			alertify.alert("Wrong Connection");
			ConnFlagCnt++;
			rightConn = 0;
		}
	}
}

goForAnimation = function(){
	
	renderForAnimationHtm = '';
	
	renderForAnimationHtm = '<div id="diagram" class="col-md-7 col-sm-12">'
								+ '</div>'
	
	$("#mainDiv").html(renderForAnimationHtm);
	
	var obj = {};
	var paper = new Raphael(document.getElementById('diagram'), '100%', 620);
	
	x = 150;
	y = 50;
	time = 2000;
	status = 0;
	
	drawValve = function(){
//		Valve
		valve = paper.rect((x+70),(y+287), 120, 50);
		
//		valve middle lines and arrows
		a = paper.path('M ' + (x+130) + ' ' + (y+287) + ' l 0 50'); //mid line
		b = paper.path('M ' + (x+90) + ' ' + (y+337) + 'l 0 -50 l -5 5 l 5 -5 l 5 5');//first arrow
		c = paper.path('M ' + (x+110) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0');
		d = paper.path('M ' + (x+150) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0');
		e = paper.path('M ' + (x+150) + ' ' + (y+287) + 'l 20 50 l -8 -3 l 8 3 l 3 -8');//right down arrow
				
//		cylinder piston
		cylPiston = paper.path('M ' + (x+175) + ' ' + (y+20) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0').attr({"fill" : "#aaa"});
	}
	
	cylinder = function(){
//		single acting cylinder
		cylinder = paper.rect((x+130), (y+20), 140, 60);
	}
	
	springs = function(){
//		Spring
		valveSpring = paper.path('M ' + (x+190) + ' ' + (y+313) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');

//		cylinder spring
		cylSpring = paper.path('M '+ (x+185) + ' ' + (y+45) + 'l 7 -25 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 7 -25');
	}
	
	pushButton = function(){
//		push button
		pushBtn = paper.path('M ' + (x+50) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0')
		.attr({"fill" : "#ccc"});
		paper.text((x-25), (y+310), "Press Actuator").attr({fill: '#000', 'font-size':15});
		
		return pushBtn;
	}
	
	quickExaust = function(){
		paper.rect((x+100), (y+150), 90, 50).attr({
			"stroke-width" : 1
		});

		paper.path("M " + (x+20) + " " + (y+175) + " l 90 0 l 12 -12 l -12 12 l 12 12 l -12 -12 l 52 0 M " + (x+140) + " " + (y+175) + " l 0 -45 M  " + (x+182) + " " + (y+175) + " l -12 -12 l 12 12 l -12 12 l 12 -12 l 8 0").attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+170), (y+175), 8).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+140) + " " + (y+135) + " l 60 0 l 0 30 l -10 0").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
	}
	
	airSource = function(){
		
		paper.rect((x+35), (y+410), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+425), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+425), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+70), (y+425), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+17) + " " + (y+425) + " l 18 0 M " + (x+95) + " " + (y+425) + " l 55 0 l 0 -88 M " + (x+85) + " " + (y+410) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M "+ (x+45) + " " + (y+410) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+66) + " " + (y+430) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
	}
	
	connection = function(){
		paper.path('M ' + (x+150) + ' ' + (y+287) + ' l 0 -40 l 70 0 l 0 -72 l -30 0');
		
		paper.path('M ' + (x+140) + ' ' + (y+130) + ' l 0 -50');
	}
	
	exaust = function(){
		exaust = paper.path('M ' + (x+170) + ' ' + (y+337) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
	}
	
	drawValve();
	cylinder();
	springs();		
	quickExaust();
	connection();
	exaust();
	airSource();
	pshBtn = pushButton();
	
	airFlow =paper.path('M 0 0 l 0 0');
	airFlow1 =paper.path('M 0 0 l 0 0');
	pshBtn.click(function(){
		
		if(status == 0){
			
			airFlow1.hide();
			status = 1;
			pushBtn.animate({path : 'M ' + (x+110) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+110) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+130), y:(y+287)}, time);
			a.animate({path : 'M ' + (x+190) + ' ' + (y+287) + ' l 0 50'}, time);
			b.animate({path : 'M ' + (x+150) + ' ' + (y+337) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
			c.animate({path : 'M ' + (x+170) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
			d.animate({path : 'M ' + (x+210) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
			e.animate({path : 'M ' + (x+210) + ' ' + (y+287) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
			valveSpring.animate({path : 'M ' + (x+250) + ' ' + (y+313) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
			
			setTimeout(function(){
				var r = [];
				r[0] = paper.path('M' +(x+95)+ ' ' +(y+425)+ 'l 0 0 l -5 -5 l 5 5 l -5 5 ').attr({'stroke':'#11fbf9'});	
			    r[0].animate({path : 'M' +(x+95)+ ' ' +(y+425)+ 'l 55 0'}, (time + 500), function(){
			    	r[1] = paper.path('M' +(x+150)+ ' ' +(y+425)+ 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke': '#11fbf9'});
				       r[1].animate({path : 'M' +(x+150)+ ' ' +(y+425)+ 'l 0 -88'}, (time + 700), function(){
				    	   r[2] = paper.path('M' +(x+150)+ ' ' +(y+338)+ 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke': '#11fbf9'});
				    	   airFlow = r[2];
				    	   airFlow.animate({path : 'M' +(x+150)+ ' ' +(y+338)+ 'l 0 -51 l -5 5 l 5 -5 l 5 5'}, (time + 500), function(){
				    		   r[3] = paper.path('M ' + (x+150) + ' ' + (y+287) + ' l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke': '#11fbf9'});
						       r[3].animate({path : 'M ' + (x+150) + ' ' + (y+287) + ' l 0 -40'}, (time), function(){
				    			   r[4] = paper.path('M ' + (x+150) + ' ' + (y+247) + ' l 0 0 l -5 -5 l 5 5 l -5 5').attr({'stroke': '#11fbf9'});
							       r[4].animate({path : 'M ' + (x+150) + ' ' + (y+247) + ' l 70 0'}, (time + 700), function(){
							    	   r[5] = paper.path('M ' + (x+220) + ' ' + (y+247) + ' l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke': '#11fbf9'});
								       r[5].animate({path : 'M ' + (x+220) + ' ' + (y+247) + ' l 0 -72'}, (time + 700), function(){
								    	   r[6] = paper.path('M ' + (x+220) + ' ' + (y+175) + ' l 0 0 l 5 -5 l -5 5 l 5 5').attr({'stroke': '#11fbf9'});
									       r[6].animate({path : 'M ' + (x+220) + ' ' + (y+175) + ' l -30 0'}, (time), function(){
									    	   r[7] = paper.path('M ' + (x+140) + ' ' + (y+150) + ' l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke': '#11fbf9'});
										       r[7].animate({path : 'M ' + (x+140) + ' ' + (y+150) + ' l 0 -70'}, (time + 700), function(){
										    	   r[8] = paper.path('M ' + (x+152) + ' ' + (y+79) + ' l 0 0').attr({'stroke': '#11fbf9', 'stroke-width': 43});
											       r[8].animate({path : 'M ' + (x+152) + ' ' + (y+79) + ' l 0 -58'}, (time + 2000), function(){
											    	   cylPiston.animate({path : 'M ' + (x+220) + ' ' + (y+20) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+3000));
										    		   cylSpring.animate({path : 'M '+ (x+231) + ' ' + (y+45) + 'l 4 -25 l 7 60 l 6 -60 l 5 60 l 5 -60 l 4 60 l 3 -60 l 2 60 l 2 -25'}, (time+3000));
											    	   
										    		   r[9] = paper.path('M ' + (x+173) + ' ' + (y+50) + 'l 0 0').attr({'stroke':'#11fbf9', 'stroke-width': 58});
									        	   		r[9].animate({path : 'M ' + (x+173) + ' ' + (y+50) + 'l 46 0'}, (time+3000), function(){
											    	  
									        	   		});
											       });
										       });
									       });
								       });
				    			   });
						       });
				    	   });
				       });
			    });
			}, (time + 200));
			
		}else if(status == 1){
			
			airFlow.hide();
			status = 0;
			pushBtn.animate({path : 'M ' + (x+50) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+70), y:(y+287)}, time);
			a.animate({path : 'M ' + (x+130) + ' ' + (y+287) + ' l 0 50'}, time);
			b.animate({path : 'M ' + (x+90) + ' ' + (y+337) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
			c.animate({path : 'M ' + (x+110) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
			d.animate({path : 'M ' + (x+150) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
			e.animate({path : 'M ' + (x+150) + ' ' + (y+287) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
			valveSpring.animate({path : 'M ' + (x+190) + ' ' + (y+313) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40'}, time);
			
			setTimeout(function(){
				
				var r = [];
			
				r[0] = paper.path('M ' + (x+219) + ' ' + (y+50) + 'l 0 0').attr({'stroke':'#fff', 'stroke-width': 58});
     	   		r[0].animate({path : 'M ' + (x+219) + ' ' + (y+50) + 'l -46 0'}, (time + 3000));
			
	     	   	cylPiston.animate({path : 'M ' + (x+175) + ' ' + (y+20) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+3000)).toFront();
	    		cylSpring.animate({path : 'M '+ (x+185) + ' ' + (y+45) + 'l 7 -25 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 7 -25'}, (time+3000)).toFront();
			
	    		r[1] = paper.path('M ' + (x+140) + ' ' + (y+80) + ' l 0 0 l -5 -5 l 5 5 l 5 -5').attr({'stroke': '#11fbf9'});
	    		r[1].animate({path : 'M ' + (x+140) + ' ' + (y+80) + ' l 0 70'}, (time + 700), function(){	
			
	    			r[2] = paper.path('M ' + (x+100) + ' ' + (y+175) + ' l 0 0 l 5 -5 l -5 5 l 5 5').attr({'stroke': '#11fbf9'});
	    			airFlow1 = r[2];
	    			airFlow1.animate({path : 'M ' + (x+100) + ' ' + (y+175) + ' l -80 0'}, (time + 700), function(){	
	    			
		    		});
	    		});
	    			
			}, (time+200));
		}
	});
}

