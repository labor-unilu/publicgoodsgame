
Users = new Meteor.Collection("users"); 



if (Meteor.is_client) {


//---------------------------------------------------

Template.hello.events = {
  'click input': function(){
    amplify.store('user_id', null);
  }
}

if(!amplify.store('user_id')){
  var user = Users.insert({
    name: Meteor.uuid(),
    last_activity: (new Date()).getTime(),

  });
  amplify.store('user_id', user);
  Session.set('user_id', amplify.store('user_id'));

} else {
  Session.set('user_id', amplify.store('user_id'));

}
//---------------------------------------------------

//***************************************************************************************

//Räume: Rot oder grün? Wieviel Spieler braucht es noch?
//---------------------------------------------------------- 

//Raum1:
//------------------------------------
Template.room1.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room1"}).count() >=4;
}

	return redorgreen2;

};


Template.room1.nrspieler1 = function(){
  
        var nrspieler = 4-Users.find({"room": "room1"}).count();

	return nrspieler;

};

Template.room1.events = {
	'click button#room1b': function() {
		Session.set("room", "room1");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room1", "roomarch": "room1"} });	
	return console.log("Eingetreten in Raum 1")
	}
};






//Raum2:
//------------------------------------
Template.room2.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room2"}).count() >=4;
}

	return redorgreen2;

};


Template.room2.nrspieler2 = function(){
  
        var nrspieler = 4-Users.find({"room": "room2"}).count()

	return nrspieler;

};


Template.room2.events = {
	'click button#room2b': function() {
		Session.set("room", "room2");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room2", "roomarch": "room2"} });	
	return console.log("Eingetreten in Raum 2")
	}
};





//Raum3:
//------------------------------------
Template.room3.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room3"}).count() >=4;
}

	return redorgreen2;

};


Template.room3.nrspieler3 = function(){
  
        var nrspieler = 4-Users.find({"room": "room3"}).count()

	return nrspieler;

};



Template.room3.events = {
	'click button#room3b': function() {
		Session.set("room", "room3");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room3", "roomarch": "room3"} });	
	return console.log("Eingetreten in Raum 3")
	}
};





//Raum4:
//------------------------------------
Template.room4.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room4"}).count() >=4;
}

	return redorgreen2;

};


Template.room4.nrspieler4 = function(){
  
        var nrspieler = 4-Users.find({"room": "room4"}).count()

	return nrspieler;

};


Template.room4.events = {
	'click button#room4b': function() {
		Session.set("room", "room4");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room4", "roomarch": "room4"} });	
	return console.log("Eingetreten in Raum 4")
	}
};



//Raum5:
//------------------------------------
Template.room5.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room5"}).count() >=4;
}

	return redorgreen2;

};




Template.room5.nrspieler5 = function(){
  
        var nrspieler = 4-Users.find({"room": "room5"}).count()

	return nrspieler;

};


Template.room5.events = {
	'click button#room5b': function() {
		Session.set("room", "room5");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room5", "roomarch": "room5"} });	
	return console.log("Eingetreten in Raum 5")
	}
};



//Raum6:
//------------------------------------
Template.room6.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room6"}).count() >=4;
}

	return redorgreen2;

};


Template.room6.nrspieler6 = function(){
  
        var nrspieler = 4-Users.find({"room": "room6"}).count()

	return nrspieler;

};


Template.room6.events = {
	'click button#room6b': function() {
		Session.set("room", "room6");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room6", "roomarch": "room6"} });	
	return console.log("Eingetreten in Raum 6")
	}
};



//Raum7:
//------------------------------------
Template.room7.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room7"}).count() >=4;
}

	return redorgreen2;

};


Template.room7.nrspieler7 = function(){
  
        var nrspieler = 4-Users.find({"room": "room7"}).count()

	return nrspieler;

};


Template.room7.events = {
	'click button#room7b': function() {
		Session.set("room", "room7");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room7", "roomarch": "room7"} });	
	return console.log("Eingetreten in Raum 7")
	}
};



//Raum8:
//------------------------------------
Template.room8.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room8"}).count() >=4;
}

	return redorgreen2;

};


Template.room8.nrspieler8 = function(){
  
        var nrspieler = 4-Users.find({"room": "room8"}).count()

	return nrspieler;

};


Template.room8.events = {
	'click button#room8b': function() {
		Session.set("room", "room8");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room8", "roomarch": "room8"} });	
	return console.log("Eingetreten in Raum 8")
	}
};



//Raum9:
//------------------------------------
Template.room9.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room9"}).count() >=4;
}

	return redorgreen2;

};


Template.room9.nrspieler9 = function(){
  
        var nrspieler = 4-Users.find({"room": "room9"}).count()

	return nrspieler;

};


Template.room9.events = {
	'click button#room9b': function() {
		Session.set("room", "room9");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room9", "roomarch": "room9"} });	
	return console.log("Eingetreten in Raum 9")
	}
};



//Raum10:
//------------------------------------
Template.room10.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room10"}).count() >=4;
}

	return redorgreen2;

};


Template.room10.nrspieler10 = function(){
  
        var nrspieler = 4-Users.find({"room": "room10"}).count()

	return nrspieler;

};


Template.room10.events = {
	'click button#room10b': function() {
		Session.set("room", "room10");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room10", "roomarch": "room10"} });	
	return console.log("Eingetreten in Raum 10")
	}
};



//Raum11:
//------------------------------------
Template.room11.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room11"}).count() >=4;
}

	return redorgreen2;

};


Template.room11.nrspieler11 = function(){
  
        var nrspieler = 4-Users.find({"room": "room11"}).count()

	return nrspieler;

};


Template.room11.events = {
	'click button#room11b': function() {
		Session.set("room", "room11");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room11", "roomarch": "room11"} });	
	return console.log("Eingetreten in Raum 11")
	}
};


//Raum12:
//------------------------------------
Template.room12.show = function(){
  	
  	var redorgreen1 = Session.get("room") == undefined;
	
	if(redorgreen1 == false){
	var redorgreen2 = true;
	
}       else {
        var redorgreen2 = Users.find({"room": "room12"}).count() >=4;
}

	return redorgreen2;

};


Template.room12.nrspieler12 = function(){
  
        var nrspieler = 4-Users.find({"room": "room12"}).count()

	return nrspieler;

};


Template.room12.events = {
	'click button#room12b': function() {
		Session.set("room", "room12");
		Users.insert({user_id: Session.get("user_id")});	
		Users.update({user_id: Session.get("user_id")}, {'$set': {'eintritt': (new Date()).getTime(), "room": "room12", "roomarch": "room12"} });	
	return console.log("Eingetreten in Raum 12")
	}
};	

//Räume: Rot oder grün? Wieviel Spieler braucht es noch?
//---------------------------------------------------------- 

//***************************************************************************************
//Ladebalken:

Template.waiting.show = function(){

	if(Session.get("room") == undefined){
		var show = false;
}       else {
    			if(Users.find({"room": Session.get("room")}).count() <4){
    				var show = true;
    		}       else {
    		    		var show = false;
    		}
    		
	}    		

return show;

};

//***************************************************************************************
//Offerteneingabebox, Resultatetafeln und Weiterleitung zur nächsten Runde:

//------------------Round1-------------------------------


//----------
Template.offer1.show = function(){
  	
	var roomcount = Users.find({"room": Session.get("room"), "room": { $exists : true }}).count();
	
	var eingabe1 = roomcount == 4;
	
	return eingabe1; 
};



Template.offer1.events = {
	'click button#offer1button': function () {
		Session.set("offer1", document.getElementById('offer1box').value);
		document.getElementById('offer1box').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		document.getElementById('offer1button').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		Users.update({user_id: Session.get("user_id")}, {'$set': {'offer1': Session.get("offer1"), 'offer1arch': Session.get("offer1")} }); // Hält die Offer1 in der Collection fest.
	}
};
//----------


//----------
// Die Offerten der einzelnen Spieler:

Template.offer1results.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.offer1results.pl1offer1 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer1; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer1results.pl2offer1 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer1; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer1results.pl3offer1 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer1; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};


Template.offer1results.pl4offer1 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer1; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};
//----------
//Durchschnitt aller Offerten (ohne die des Spielers)

Template.offer1mean.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};



Template.offer1mean.offer1mean = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer1; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer1; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer1; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer1; // Jüngster Eintrag kommt zuerst!!!!	
	
	var mean = (pl1*1 + pl2*1 + pl3*1 + pl4*1 - Session.get("offer1")*1)/3;
	
	return Math.round(mean); 
};


//----------
//Kontostand:

Template.kontostandoffer1.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.kontostandoffer1.kontostandoffer1 = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer1; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer1; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer1; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer1; // Jüngster Eintrag kommt zuerst!!!!	
	
	var kontostand = (pl1*1 + pl2*1 + pl3*1 + pl4*1)*1.6+100-Session.get("offer1")*1;
	
	Session.set("kontostand1", Math.round(kontostand));
	
	return Math.round(kontostand); 
};


//----------

//Anzeige, du hast Zeit:
Template.time1.show = function(){

	var ready1  = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 


};
//----------

//Button einblenden für weiter...

Template.weiter1.show =  function(){
			
			
			if(Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).count() ==4){
			
			Meteor.setTimeout(function(){
			console.log("weiter1gesetzt");
			Session.set("weiter1", true)
			
			
			}
			
			, 10000);
			}
			return Session.get("weiter1");
};	

//----------

//Button einblenden für weiter... Was passiert wenn man betätigt...

Template.weiter1.events = {
  	'click button#weiter1': function() {
	//Einmaliges Abspeichern der Spielpartner:
	var player1 = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).fetch()[0].user_id
	var player2 = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).fetch()[1].user_id
	var player3 = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).fetch()[2].user_id
	var player4 = Users.find({"room": Session.get("room"), "offer1": { $exists : true }}).fetch()[3].user_id
	Users.update({user_id: Session.get("user_id")}, {'$push': {'partner': [player1, player2, player3, player4]}})
	//-------------------------------------------------
	Users.update({user_id: Session.get("user_id")}, {'$set': {"ok1": "yes", "ok1arch": "yes"}});
	document.getElementById('weiter1').disabled = true;
	console.log("weiter1allesok");
}
};



//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->

//------------------Round2-------------------------------


//----------
Template.offer2.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "ok1": { $exists : true }}).count() ==4; //Das implementieren
	return ready1;
};



Template.offer2.events = {
	'click button#offer2button': function () {
		Session.set("offer2", document.getElementById('offer2box').value);
		document.getElementById('offer2box').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		document.getElementById('offer2button').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		Users.update({user_id: Session.get("user_id")}, {'$set': {'offer2': Session.get("offer2"), 'offer2arch': Session.get("offer2")} }); // Hält die Offer1 in der Collection fest.
	}
};
//----------


//----------
// Die Offerten der einzelnen Spieler:

Template.offer2results.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer2": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.offer2results.pl1offer2 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer2; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer2results.pl2offer2 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer2; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer2results.pl3offer2 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer2; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};


Template.offer2results.pl4offer2 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer2; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};
//----------
//Durchschnitt aller Offerten (ohne die des Spielers)

Template.offer2mean.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer2": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};



Template.offer2mean.offer2mean = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer2; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer2; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer2; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer2; // Jüngster Eintrag kommt zuerst!!!!	
	
	var mean = (pl1*1 + pl2*1 + pl3*1 + pl4*1 - Session.get("offer2")*1)/3;
	
	return Math.round(mean); 
};


//----------
//Kontostand:

Template.kontostandoffer2.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer2": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.kontostandoffer2.kontostandoffer2 = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer2; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer2; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer2; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer2; // Jüngster Eintrag kommt zuerst!!!!	
	
	var kontostand = (pl1*1 + pl2*1 + pl3*1 + pl4*1)*1.6+100-Session.get("offer1")*1+1*Session.get("kontostand1");
	
	Session.set("kontostand2", Math.round(kontostand));
	
	return Math.round(kontostand); 
};


//----------

//Anzeige, du hast Zeit:
Template.time2.show = function(){

	var ready1  = Users.find({"room": Session.get("room"), "offer2": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 


};
//----------



Template.weiter2.show =  function(){
			
			
			if(Users.find({"room": Session.get("room"), "offer2": { $exists : true }}).count() ==4){
			
			Meteor.setTimeout(function(){
			console.log("weiter2gesetzt");
			Session.set("weiter2", true)
			
			
			}
			
			, 10000);
			}
			return Session.get("weiter2");
};	



Template.weiter2.events = {
  	'click button#weiter2': function() {
	Users.update({user_id: Session.get("user_id")}, {'$set': {"ok2": "yes", "ok2arch": "yes"}});
	document.getElementById('weiter2').disabled = true;
	console.log("weiter2allesok");
}
};

//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->


//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->

//------------------Round3-------------------------------


//----------
Template.offer3.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "ok2": { $exists : true }}).count() ==4; //Das implementieren
	return ready1;
};



Template.offer3.events = {
	'click button#offer3button': function () {
		Session.set("offer3", document.getElementById('offer3box').value);
		document.getElementById('offer3box').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		document.getElementById('offer3button').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		Users.update({user_id: Session.get("user_id")}, {'$set': {'offer3': Session.get("offer3"), 'offer3arch': Session.get("offer3")} }); // Hält die Offer1 in der Collection fest.
	}
};
//----------


//----------
// Die Offerten der einzelnen Spieler:

Template.offer3results.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer3": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.offer3results.pl1offer3 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer3; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer3results.pl2offer3 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer3; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer3results.pl3offer3 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer3; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};


Template.offer3results.pl4offer3 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer3; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};
//----------
//Durchschnitt aller Offerten (ohne die des Spielers)

Template.offer3mean.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer3": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};



Template.offer3mean.offer3mean = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer3; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer3; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer3; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer3; // Jüngster Eintrag kommt zuerst!!!!	
	
	var mean = (pl1*1 + pl2*1 + pl3*1 + pl4*1 - Session.get("offer3")*1)/3;
	
	return Math.round(mean); 
};


//----------
//Kontostand:

Template.kontostandoffer3.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer3": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.kontostandoffer3.kontostandoffer3 = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer3; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer3; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer3; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer3; // Jüngster Eintrag kommt zuerst!!!!	
	
	var kontostand = (pl1*1 + pl2*1 + pl3*1 + pl4*1)*1.6+100-Session.get("offer1")*1+1*Session.get("kontostand2");
	
	Session.set("kontostand3", Math.round(kontostand));
	
	return Math.round(kontostand); 
};


//----------

//Anzeige, du hast Zeit:
Template.time3.show = function(){

	var ready1  = Users.find({"room": Session.get("room"), "offer3": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 


};
//----------



Template.weiter3.show =  function(){
			
			
			if(Users.find({"room": Session.get("room"), "offer3": { $exists : true }}).count() ==4){
			
			Meteor.setTimeout(function(){
			console.log("weiter3gesetzt");
			Session.set("weiter3", true)
			
			
			}
			
			, 10000);
			}
			return Session.get("weiter3");
};	



Template.weiter3.events = {
  	'click button#weiter3': function() {
	Users.update({user_id: Session.get("user_id")}, {'$set': {"ok3": "yes", "ok3arch": "yes"}});
	document.getElementById('weiter3').disabled = true;
	console.log("weiter3allesok");
}
};

//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->



//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->

//------------------Round4-------------------------------


//----------
Template.offer4.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "ok3": { $exists : true }}).count() ==4; //Das implementieren
	return ready1;
};



Template.offer4.events = {
	'click button#offer4button': function () {
		Session.set("offer4", document.getElementById('offer4box').value);
		document.getElementById('offer4box').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		document.getElementById('offer4button').disabled = true; // .disabled = true; -> Wenn Wert eingegeben, dann button blockiert
		Users.update({user_id: Session.get("user_id")}, {'$set': {'offer4': Session.get("offer4"), 'offer4arch': Session.get("offer4")} }); // Hält die Offer1 in der Collection fest.
	}
};
//----------


//----------
// Die Offerten der einzelnen Spieler:

Template.offer4results.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer4": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.offer4results.pl1offer4 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer4; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer4results.pl2offer4 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer4; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};

Template.offer4results.pl3offer4 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer4; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};


Template.offer4results.pl4offer4 = function(){
	
	var res = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer4; // Jüngster Eintrag kommt zuerst!!!!
	return res; 

};
//----------
//Durchschnitt aller Offerten (ohne die des Spielers)

Template.offer4mean.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer4": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};



Template.offer4mean.offer4mean = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer4; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer4; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer4; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer4; // Jüngster Eintrag kommt zuerst!!!!	
	
	var mean = (pl1*1 + pl2*1 + pl3*1 + pl4*1 - Session.get("offer4")*1)/3;
	
	return Math.round(mean); 
};


//----------
//Kontostand:

Template.kontostandoffer4.show = function(){
  	
	var ready1  = Users.find({"room": Session.get("room"), "offer4": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 
};


Template.kontostandoffer4.kontostandoffer4 = function(){
  	
	var pl1 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[0].offer4; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl2 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[1].offer4; // Jüngster Eintrag kommt zuerst!!!!
	
	var pl3 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[2].offer4; // Jüngster Eintrag kommt zuerst!!!!	
	
	var pl4 = Users.find({"room": Session.get("room")}, {sort: {eintritt: -1}}).fetch()[3].offer4; // Jüngster Eintrag kommt zuerst!!!!	
	
	var kontostand = (pl1*1 + pl2*1 + pl3*1 + pl4*1)*1.6+100-Session.get("offer1")*1+1*Session.get("kontostand3");
	
	Session.set("kontostand4", Math.round(kontostand));
	
	return Math.round(kontostand); 
};


//----------

//Anzeige, du hast Zeit:
Template.time4.show = function(){

	var ready1  = Users.find({"room": Session.get("room"), "offer4": { $exists : true }}).count() ==4; //Das implementieren
	return ready1; 


};
//----------



Template.weiter4.show =  function(){
			
			
			if(Session.get("kontostand4") != undefined){
			
			Meteor.setTimeout(function(){
			console.log("weiter4gesetzt");
			Session.set("weiter4", true)
			
			
			}
			
			, 10000);
			}
			return Session.get("weiter4");
};	



Template.weiter4.events = {
  	'click button#weiter4': function() {
	Users.update({user_id: Session.get("user_id")}, {'$unset': {"offer1": "", "offer2": "", "offer3": "", "offer4": "", "room": "", "ok1": "",  "ok2": "",  "ok3": ""}});
	Session.set("postgame", true)
	console.log("abschlussallesok");
}
};


//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->
//<!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->


Template.postgame.show = function(){
  	
	var abschluss = Session.get("postgame")
	
	return abschluss; 

};








//***************************************************************************************
}

if (Meteor.is_server) {
  Meteor.startup(function () {

  });
}









