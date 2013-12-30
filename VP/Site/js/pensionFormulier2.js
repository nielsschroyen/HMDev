var isDebuggingInschrijving = false;

function loadVakantieInschrijving()
{
aantalHonden = 1;
var dat = new Date();
var jaar = dat.getYear() + 1900;
if(jaar > 3000)
{
jaar = jaar-1900;
}


dag = dat.getDate();
if(dag > 9)
	dag = dag;
	else
	dag = "0"+dag;
maand = dat.getMonth()+1;
if(maand> 9)
	maand = maand;
	else
	maand = "0"+maand;
var data = (dag +"/" + maand +"/" + jaar);
//document.getElementById('dp_verblijf_vertrek').value = data;
//document.getElementById('dp_verblijf_aankomst').value = data;
calculeer();

}

function loadVakantieInschrijving2()
{
aantalHonden = 1;
var dat = new Date();
var jaar = dat.getYear() + 1900;
if(jaar > 3000)
{
jaar = jaar-1900;
}


dag = dat.getDate();
if(dag > 9)
	dag = dag;
	else
	dag = "0"+dag;
maand = dat.getMonth()+1;
if(maand> 9)
	maand = maand;
	else
	maand = "0"+maand;
var data = (dag +"/" + maand +"/" + jaar);
calculeer();
//document.getElementById('HiddenID').value = 0;
}

function verzendinschrijving()
{
document.getElementById('vakantieform').submit();
}

function NextStepOne()
{
	if(isDebuggingInschrijving || ValidateStepOne())
	{
		// var email = document.getElementById('txt_idEmail').value;
		// var tel = document.getElementById('txt_idTelefoonnummer').value;
		// var tel2 = document.getElementById('txt_idTelefoonnummer2').value;
		// var url = "http://vakantiepark.hoogmaatheide.be/scripts/inschrijving/getClientInfo.php?email="+ email  +"& tel="+tel+"& tel2="+tel2;
		// document.getElementById('stap1VolgendeKnop').disabled ='disabled'; 	
			// jQuery.ajax({
				// url: url,
				// dataType: 'jsonp',
				// success: function(response) {
					// if(response.klant != 'empty' )
					// {
					   // LoadPerson(response.klant);
					   // }
					   // else
					   // {
					   // LoadPerson(null);
					   // }
					   // GoToStepTwo();
					// },
				// error: function (xhr, ajaxOptions, thrownError) {
				 // LoadPerson(null);
				// GoToStepTwo();
				// }
			// });
			GoToStepTwo();
	}
}


function LoadPerson(person)
{
	var hondnr = 0;
	if(person == null)
	{
	document.getElementById('txtPensionKlantID').value = "-1";
	document.getElementById('txt_straat').value = "";
	document.getElementById('txt_nr').value = "";
	document.getElementById('txt_postcode').value="";
	document.getElementById('txt_gemeente').value = "";
	document.getElementById('txt_btw').value = "";
	document.getElementById ('select_land').value = "België";   
	
	
	}
	else
	{
	document.getElementById('txtPensionKlantID').value = person.PensionKlantID;
	document.getElementById('txt_straat').value = person.Straat;
	document.getElementById('txt_nr').value = person.HuisNr;
	document.getElementById('txt_postcode').value=person.Postcode;
	document.getElementById('txt_gemeente').value = person.Gemeente;
	document.getElementById('txt_btw').value = person.BTW;
	document.getElementById ('select_land').value = person.Land;   

	for (hond in person.Honden)
	  {
		hondnr =  hondnr+1;
	    LoadHond(person.Honden[hond],hondnr)		
	  }
	 
	}
	
	 if(hondnr == 0)
	  {
	  wijzigAantalHonden(1); 
	  }
	  else
	  {
	 wijzigAantalHonden(hondnr);  
	}	 
	  while(hondnr < 5)
	  {
	  hondnr =  hondnr+1;
		  LoadHond(null,hondnr)
		  
	  }
	
	
}

function LoadHond(hond, hondnb)
{
	if(hond == null)
	{
	document.getElementById('hond'+hondnb+'_id').value = "-1";
	document.getElementById('txt_hond'+hondnb+'_naam').value = "";
	document.getElementById('txt_hond'+hondnb+'_ras').value = "";
	document.getElementById('txt_hond'+hondnb+'_opmerkingen').value = "";
	document.getElementById('txt_hond'+hondnb+'_voeding_naam').value="";
	document.getElementById('txt_hond'+hondnb+'_voeding_soort').value = "";
	document.getElementById('txt_hond'+hondnb+'_voeding_opmerkingen').value = "";
	document.getElementById('txt_hond'+hondnb+'_med_naam').value = "";
	document.getElementById('txt_hond'+hondnb+'_med_opmerkingen').value = "";
	
	document.getElementById ('select_hond'+hondnb+'_geslacht').value = "0";   
	document.getElementById ('select_hond'+hondnb+'_grootte').value = "0";   
	document.getElementById ('select_hond'+hondnb+'_jaar').value = "2013";   
	document.getElementById ('radio_hond'+hondnb+'_gecast').checked = 0;   
	document.getElementById ('radio_hond'+hondnb+'_vanhm').checked = 0;   
	document.getElementById ('radio_hond'+hondnb+'_dieet').checked = 0;   
	document.getElementById ('radio_hond'+hondnb+'_med').checked = 0;   	
	
	document.getElementById('div_hond_'+hondnb).style.display ='none'; 
	

	}
	else
	{
			document.getElementById('txt_hond'+hondnb+'_naam').value = hond.HondNaam;
			document.getElementById('hond'+hondnb+'_id').value = hond.HondID;
			document.getElementById('txt_hond'+hondnb+'_ras').value = hond.Ras;
			document.getElementById('txt_hond'+hondnb+'_opmerkingen').value = hond.Opmerkingen;
			document.getElementById('txt_hond'+hondnb+'_voeding_naam').value= hond.DieetSoort;
			document.getElementById('txt_hond'+hondnb+'_voeding_soort').value = hond.DieetFrequency;
			document.getElementById('txt_hond'+hondnb+'_voeding_opmerkingen').value = hond.DieetInfo;
			document.getElementById('txt_hond'+hondnb+'_med_naam').value = hond.MedicatieNaam;
			document.getElementById('txt_hond'+hondnb+'_med_opmerkingen').value = hond.MedicatieInfo;
			
			document.getElementById ('select_hond'+hondnb+'_geslacht').value = hond.Geslacht;   
			document.getElementById ('select_hond'+hondnb+'_grootte').value = hond.Grootte;   
			document.getElementById ('select_hond'+hondnb+'_jaar').value = hond.GeboorteDatum;   
			document.getElementById ('radio_hond'+hondnb+'_gecast').checked = hond.Gecastreerd;   
			document.getElementById ('radio_hond'+hondnb+'_vanhm').checked = hond.VanHoogmaatheide;   
			document.getElementById ('radio_hond'+hondnb+'_dieet').checked = hond.Dieet;   
			document.getElementById ('radio_hond'+hondnb+'_med').checked = hond.Medicatie;   	
		
	}
	
	showif('radio_hond'+hondnb+'_dieet','div_hond'+hondnb+'_dieet');
	showif('radio_hond'+hondnb+'_med','div_hond'+hondnb+'_med');
	
	
}

function GoToStepTwo()
{
	document.getElementById('stap1VolgendeKnop').disabled =''; 	
	document.getElementById('igeg').style.display ='none'; 
	document.getElementById('ugeg').style.display =''; 
}

function ValidateStepOne()
{

	naam = document.getElementById('txt_achternaam').value;
	if(naam == "")
	{
		fout('Gelieve je naam in te vullen.' , 'txt_achternaam');
		return false;
	}
	
	
	tel = document.getElementById('txt_idTelefoonnummer').value;
	if(tel == "")
	{
		fout('Gelieve je telefoonnummer in te vullen.' , 'txt_idTelefoonnummer');
	return false;
	}
	
	tel2 = document.getElementById('txt_idTelefoonnummer2').value;
	if(tel == "")
	{
		fout('Gelieve een nood telefoonnummur in te vullen.' , 'txt_idTelefoonnummer2');
	return false;
	}
	
	email = document.getElementById('txt_idEmail').value;
	if(email == "")
	{
		fout('Gelieve je email in te vullen.' , 'txt_idEmail');
		return false;
	}
	
	if(!echeck(email))
	{
		fout('Gelieve een juist email adres in te vullen.' , 'txt_idEmail');
		return false;
	}	
	
	return true;
}

function NextStepTwo()
{
if( isDebuggingInschrijving || ValidateStepTwo())
	{
	document.getElementById('ugeg').style.display ='none'; 
	document.getElementById('hgeg').style.display =''; 
	}
}

function ValidateStepTwo()
{	


	straat = document.getElementById('txt_straat').value;
	if(straat== "")
	{
		fout('Gelieve je straatnaam in te vullen.' , 'txt_straat');
		return false;
	}
	
	nr = document.getElementById('txt_nr').value;
	if(nr == "")
	{
		fout('Gelieve je huisnummer in te vullen.' , 'txt_nr');
	return false;
	}
	
	postcode = document.getElementById('txt_postcode').value;
	if(postcode == "")
	{
		fout('Gelieve je postcode in te vullen.' , 'txt_postcode');
		return false;
	}
	
	gemeente = document.getElementById('txt_gemeente').value;
	if(gemeente == "")
	{
		fout('Gelieve je gemeente in te vullen.' , 'txt_gemeente');
		return false;
	}
	
	return true;

}

function NextStepThree()
{
if(isDebuggingInschrijving || ValidateStepThree())
	{
	document.getElementById('hgeg').style.display ='none'; 
	document.getElementById('pgeg').style.display =''; 
	}
}

function ValidateStepThree()
{

	for(i = 1; i < aantalHonden+1;i++)
	{
		 if(document.getElementById('txt_hond'+i+'_naam').value == "")
		 {
			fout('Gelieve de naam van hond ' + i + ' in te vullen.' , 'txt_hond'+i+'_naam');
			 return false;
		 }
		 
		 if(document.getElementById('txt_hond'+i+'_ras').value == "")
		 {
			fout('Gelieve het ras van hond ' + i + ' in te vullen.' , 'txt_hond'+i+'_ras');
			 return false;
		 }
		 
		 
		 if(document.getElementById('radio_hond'+i+'_dieet').checked)
			{
					 if(document.getElementById('txt_hond'+i+'_voeding_naam').value == "")
						 {
							fout('Gelieve de naam van  de voeding van hond ' + i + ' in te vullen.' , 'txt_hond'+i+'_voeding_naam');
							 return false;
						 }
					if(document.getElementById('txt_hond'+i+'_voeding_soort').value == "")
						 {
							fout('Gelieve de soort van  de voeding van hond ' + i + ' in te vullen.' , 'txt_hond'+i+'_voeding_soort');
							 return false;
						 }
			}
		
		
	}
	return true;
}

function NextStepFour()
{
if(isDebuggingInschrijving ||ValidateStepFour())
	{
	document.getElementById('sgeg').style.display =''; 
	document.getElementById('pgeg').style.display ='none'; 
	}
}

function ValidateStepFour()
{
	uuraankomst = document.getElementById('select_uuraankomst').selectedIndex;
	
	datumaankomst = document.getElementById('dp_verblijf_aankomst').value;
	 if(datumaankomst == "")
	 {
		 fout('Gelieve de aankomst datum in te vullen.' , 'dp_verblijf_aankomst');
		 return false;
	 }
	 
	 uurvertrek = document.getElementById('select_uurvertrek').selectedIndex;
	
	datumvertrek = document.getElementById('dp_verblijf_vertrek').value;
	 if(datumvertrek == "")
	 {
		 fout('Gelieve de vertrek datum in te vullen.' , 'dp_verblijf_vertrek');
		 return false;
	 }
	 
	var datumAankomst =  new Date(datumaankomst.substr(6,4),datumaankomst.substr(3,2),datumaankomst.substr(0,2));
	var datumVertrek = 	new Date(datumvertrek.substr(6,4),datumvertrek.substr(3,2),datumvertrek.substr(0,2));


	//Indien vertrekdatum voor de aankomst is, stop met calculeren
	if (datumVertrek.getTime()<datumAankomst.getTime())
	{
		fout('De aankomst datum komt na de vertrek datum, gelieve dit te wijzigen' , 'dp_verblijf_aankomst');
		return false;
	}

	return true;

}

function ValidateStepFive()
{

if(document.getElementById('radio_speelweide').checked 
	&& document.getElementById('select_speelweide').selectedIndex == 2
	&& document.getElementById('select_speelweide_selecteerder').length == 0)
{
	fout('Je hebt gekozen om zelf de dagen voor de speelweide te kiezen maar er is nog geen dag geselecteerd. Gelieve een dag toe te voegen' , 'select_speelweide_selecteerder');
		return false;

}

if(document.getElementById('radio_wandel').checked 
	&& document.getElementById('select_wandel').selectedIndex == 2
	&& document.getElementById('select_wandel_selecteerder').length == 0)
{
	fout('Je hebt gekozen om zelf de dagen voor de wandelingen te kiezen maar er is nog geen dag geselecteerd. Gelieve een dag toe te voegen' , 'select_wandel_selecteerder');
		return false;

}

if(document.getElementById('radio_zwembad').checked 
	&& document.getElementById('select_zwembad').selectedIndex == 2
	&& document.getElementById('select_zwembad_selecteerder').length == 0)
{
	fout('Je hebt gekozen om zelf de dagen voor de wandelingen met zwemmen te kiezen maar er is nog geen dag geselecteerd. Gelieve een dag toe te voegen' , 'select_zwembad_selecteerder');
		return false;

}

if(document.getElementById('radio_voeding_warm').checked 
	&& document.getElementById('select_voeding_warm').selectedIndex == 2
	&& document.getElementById('select_voeding_warm_selecteerder').length == 0)
{
	fout('Je hebt gekozen om zelf de dagen voor de warme voeding te kiezen maar er is nog geen dag geselecteerd. Gelieve een dag toe te voegen' , 'select_voeding_warm_selecteerder');
		return false;

}


return true;
}

function NextStepFive()
{

if(isDebuggingInschrijving || ValidateStepFive())
{

var name = document.getElementById('txt_voornaam').value + " " + document.getElementById('txt_achternaam').value; 
var honden;

//Variabele initialisatie
var one_day=1000*60*60*24;

var aantalHonden =  aantalhonden();

var dat_Aankomst = document.getElementById('dp_verblijf_aankomst').value;
var dat_Vertrek = document.getElementById('dp_verblijf_vertrek').value;
var datumAankomst =  new Date(dat_Aankomst.substr(6,4),dat_Aankomst.substr(3,2)- 1,dat_Aankomst.substr(0,2));
var datumVertrek = 	new Date(dat_Vertrek.substr(6,4),dat_Vertrek.substr(3,2)- 1,dat_Vertrek.substr(0,2));
var aantalNachten = Math.ceil((datumVertrek.getTime()-datumAankomst.getTime())/(one_day));

var honden = ""
	for(i = 1; i < aantalHonden+1;i++)
	{
		if (i >1)
		{
		honden = honden+", ";
		}
		 honden = honden + document.getElementById('txt_hond'+i+'_naam').value;
		
		
	}


var msg = "Beste " + name + ",<br><br> U staat op het punt om een verblijf te boeken met volgende gegevens: <br><br>";
msg = msg + "Hond(en): " + honden +"<br>";
msg = msg + "Aantal nachten: " + aantalNachten +"<br>";
msg = msg + "Aankomst: " + dat_Aankomst +" Vertrek: "+ dat_Vertrek +" <br>";

msg = msg + "<br> <p class='infotitle'>Prijsinformatie </p>"  + document.getElementById("lblprijs").innerHTML + "<br>";

msg = msg + "<br>Indien u zeker bent van uw keuze, klik dan op versturen.";
document.getElementById("labelbevestiging").innerHTML = msg; 

	document.getElementById('bgeg').style.display =''; 
	document.getElementById('sgeg').style.display ='none'; 
}
}

//EMAIL CHECK
function echeck(str) {
		str = trim(str);
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    return false
		 }

 		 return true					
	}
// remove multiple, leading or trailing spaces
function trim(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s;
}

function fout(message, element)
{	
	jAlert(message,"Opgelet");
	//alert(message);
	//document.getElementById(element).focus();
}

function show(id1, id2) 
{ 
	document.getElementById(id1).style.display ='none'; 
	document.getElementById(id2).style.display =''; 
} 

function showif(chk, div) 
{ 
	if(	document.getElementById(chk).checked)
		document.getElementById(div).style.display =''; 
	else
		document.getElementById(div).style.display ='none'; 
		
		calculeer();
} 
function showif2(radio, div) 
{ 
	if(	document.getElementById(chk).checked)
		document.getElementById(div).style.display =''; 
	else
		document.getElementById(div).style.display ='none'; 
		
		calculeer();
} 

function showcase(selec, div) 
{ 
	if(	document.getElementById(selec).selectedIndex == 2)
		document.getElementById(div).style.display =''; 
	else
		document.getElementById(div).style.display ='none'; 
} 

function showInfo(div) 
{ 
	activeDiv = div;
	document.getElementById(div).style.display =''; 
	document.getElementById('div_info').style.display ='none'; 
}

function hideInfo() 
{ 
	document.getElementById(activeDiv).style.display ='none'; 
	document.getElementById('div_info').style.display =''; 
}

function calculeer()
{	

//Variabele initialisatie
var one_day=1000*60*60*24;
var tot = 0;
var msg = "Te weinig informatie voor een prijsberekening.";
var aantalHonden =  aantalhonden();

var dat_Aankomst = document.getElementById('dp_verblijf_aankomst').value;


//Indien dag niet ingevuld is stop met calculeren
if(dat_Aankomst == "")
{
	document.getElementById('lblprijs').innerHTML = "Te weinig informatie voor een prijsberekening.";
	return;
}
	
datePickerController.setCursorDate('dp_verblijf_vertrek', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));

var dat_Vertrek = document.getElementById('dp_verblijf_vertrek').value;

//Indien dag niet ingevuld is stop met calculeren	
if(dat_Vertrek == "")
{
	document.getElementById('lblprijs').innerHTML = "Te weinig informatie voor een prijsberekening.";
	return;
}

	
var datumAankomst =  new Date(dat_Aankomst.substr(6,4),dat_Aankomst.substr(3,2) - 1,dat_Aankomst.substr(0,2));
var datumVertrek = 	new Date(dat_Vertrek.substr(6,4),dat_Vertrek.substr(3,2) -1,dat_Vertrek.substr(0,2));
 
formatDates(dat_Aankomst,dat_Vertrek);
 

var jaar = datumAankomst.getYear()+1900;
//IE FIX...
if(jaar > 3000)
{
jaar = jaar - 1900;
}

var aantalNachten = Math.ceil((datumVertrek.getTime()-datumAankomst.getTime())/(one_day));

//Indien vertrekdatum voor de aankomst is, stop met calculeren
if (aantalNachten <= -1)
{
	document.getElementById('lblprijs').innerHTML = "De vertrekdatum komt voor de aankomstdatum, gelieve de datums te wijzigen.";
	return;
}

if (aantalNachten == 0)
	aantalNachten = 1;


var juli = new Date(jaar, 6,1);
var sept = new Date(jaar, 8,1);


//ppNormaal
var ppnNormaal = 11;

//Nachten normaal seizoen
var nachtenNormaal = 0;

//ppHoog
var ppnHoog = 0;

//Nachten hoogseizoen
var nachtenHoog = 0;


			
		if(datumAankomst < juli)
		{
			if(datumVertrek < juli)
			{
				nachtenNormaal = aantalNachten;
			}
			else
			{
				if (datumVertrek <  sept)
				{
					nachtenNormaal =  Math.ceil((juli.getTime()-datumAankomst.getTime())/(one_day));
					nachtenHoog =  Math.ceil((datumVertrek.getTime()-juli.getTime())/(one_day));
				}
					else
					{
						nachtenNormaal =  Math.ceil((juli.getTime()-datumAankomst.getTime())/(one_day)) +  Math.ceil((datumVertrek.getTime()-sept.getTime())/(one_day)) ;
						nachtenHoog =  92;
					}
			}
		}
		else
		{
			if(datumAankomst >= sept)
			{
				nachtenNormaal = aantalNachten;
			}
			else
			{
				if (datumVertrek <= sept)
				{
					nachtenNormaal = 0;
					nachtenHoog = aantalNachten;
				}
				else
				{
					nachtenNormaal = Math.ceil((datumVertrek.getTime()-sept.getTime())/(one_day));
					nachtenHoog = Math.ceil((sept.getTime()-datumAankomst.getTime())/(one_day));
				}
			}
		}	
	
	
	//PRIJS BEREKENING
var ppnSpeel = 5;
var ppnWandel = 8;
var ppnBinnen = 5;
var ppnZwembad = 10;
var ppnVoeding = 2.5;
var ppnKussen = 2;

	if(aantalHonden > 1)
	{
		ppnNormaal = 9;
		if(aantalNachten < 4)
		{
		ppnHoog = 17;
		}
		else
			{
			if(aantalNachten < 11)
			{
			ppnHoog = 14;
			}
			else
			{
				if(aantalNachten < 21)
				{
					ppnHoog = 12;
				}
				else
				{
					ppnHoog = 10;
					ppnNormaal = 7;
				}		
			}		
		}
	}
	else
	{	
		if(aantalNachten < 4)
		{
		ppnHoog = 19;
		}
		else
		{
			if(aantalNachten < 11)
			{
				ppnHoog = 16;
			}
			else
			{
				if(aantalNachten < 21)
				{
					ppnHoog = 14;
				}
				else
				{
					ppnHoog = 12;
					ppnNormaal = 8;
				}		
			
			}
		}		
	}
	
	var pHoog = ppnHoog * nachtenHoog * aantalHonden;
	
var pNormaal = ppnNormaal * nachtenNormaal * aantalHonden;

var prijstext = ""
 
if(pHoog !=0)
	prijstext += "Hoogseizoen: " + pHoog + " Euro  <br>";

	if(pNormaal !=0)
	prijstext += "Laagseizoen: " + pNormaal + " Euro  <br>";
	
//PRIJS BEREKENING SERVICE

//VERWARMD HOK------------------------
var pVerwarmd = 0;
if(document.getElementById('check_verwarmd').checked) //Verwarmd hok
{
		pVerwarmd = aantalNachten * ppnBinnen	;
		prijstext += "Verwarmd verblijf: " + pVerwarmd + " Euro  <br>";
}
//kussen------------------------
var pKussen = 0;
if(document.getElementById('check_kussen').checked) //Verwarmd hok
{
		pKussen = aantalNachten * ppnKussen	;
		prijstext += "Luxe kussen: " + pKussen + " Euro  <br>";
}

//SPEELWEIDE SERVICE------------------
var pSpeel = 0;

	if(document.getElementById('radio_speelweide').checked)
	{
		 var aantalmin = document.getElementById('select_speelweide_hoelang').selectedIndex + 1;
		if(document.getElementById('select_speelweide').selectedIndex == 0)//wandeling
		{
					pSpeel = aantalHonden * (aantalNachten-1) * aantalmin *   ppnSpeel;
					prijstext += "Speelweide Service: "  + pSpeel + " Euro  <br>";
		}
		else
		{		
			if(document.getElementById('select_speelweide').selectedIndex == 1)
			{
				pSpeel = aantalHonden * Math.floor(aantalNachten/2) * aantalmin *   ppnSpeel;
					prijstext += "Speelweide Service: "+ pSpeel + " Euro  <br>";
			}
			else
			{
			
				var nn = document.getElementById('select_speelweide_selecteerder').options.length;
				if(nn>0)
				 {
				pSpeel = aantalHonden * nn *  aantalmin * ppnSpeel;
				prijstext += "Speelweide Service: "  + pSpeel + " Euro  <br>";
				}
			}
		}
	}

//WANDEL SERVICE
var pWandeling = 0;
if(document.getElementById('radio_wandel').checked)
	{
		 var aantalmin = document.getElementById('select_wandel_hoelang').selectedIndex + 1;
		if(document.getElementById('select_wandel').selectedIndex == 0)//wandeling
		{
					pWandeling = aantalHonden * (aantalNachten-1) * aantalmin *   ppnWandel;
					prijstext += "Wandel Service: "  + pWandeling + " Euro  <br>";
		}
		else
		{		
			
			if(document.getElementById('select_wandel').selectedIndex == 1)
			{				
				var speelweideOmDeDag = document.getElementById('radio_speelweide').checked && document.getElementById('select_speelweide').selectedIndex == 1;
				
				if(speelweideOmDeDag)
				{
					var mNachten = Math.floor((aantalNachten-1)/2);
				}
				else
				{
					var mNachten = Math.floor(aantalNachten/2);
				}
				
				pWandeling = aantalHonden * mNachten * aantalmin *   ppnWandel;
				prijstext += "Wandel Service: "   + pWandeling + " Euro  <br>";
			}
			else
			{
			
				var nn = document.getElementById('select_wandel_selecteerder').options.length;
				if(nn>0)
				 {
				pWandeling = aantalHonden * nn *  aantalmin * ppnWandel;
				prijstext += "Wandel Service: "  + pWandeling + " Euro  <br>";
				}
			}
		}
	}


//ZWEMBAD SERVICE
var pZwembad = 0;
if(document.getElementById('radio_zwembad').checked)
	{
		 var aantalmin = document.getElementById('select_zwembad_hoelang').selectedIndex + 1;
		if(document.getElementById('select_zwembad').selectedIndex == 0)//zwembad
		{
					pZwembad = aantalHonden * (aantalNachten -1) * aantalmin *   ppnZwembad;
					prijstext += "Zwem Service: "   + pZwembad + " Euro  <br>";
		}
		else
		{		
			if(document.getElementById('select_zwembad').selectedIndex == 1)
			{
				pZwembad = aantalHonden * Math.floor(aantalNachten/2) * aantalmin *   ppnZwembad;
					prijstext += "Zwem Service: "   + pZwembad + " Euro  <br>";
			}
			else
			{
			
				var nn = document.getElementById('select_zwembad_selecteerder').options.length;
				if(nn>0)
				 {
				pZwembad = aantalHonden * nn *  aantalmin * ppnZwembad;
				prijstext += "Zwem Service: " + pZwembad + " Euro  <br>";
				}
			}
		}
	}
	
var pVoeding = 0;
if(document.getElementById('radio_voeding_warm').checked)
	{
		 var aantalmin = document.getElementById('select_voeding_warm_hoelang').selectedIndex + 1;
		if(document.getElementById('select_voeding_warm').selectedIndex == 0)//voeding_warm
		{
					pVoeding = aantalHonden * (aantalNachten -1) * aantalmin *   ppnVoeding;
					prijstext += "Supermix Service: " + pVoeding + " Euro  <br>";
		}
		else
		{		
			if(document.getElementById('select_voeding_warm').selectedIndex == 1)
			{
				pVoeding = aantalHonden * Math.floor(aantalNachten/2) * aantalmin *   ppnVoeding;
					prijstext += "Supermix Service: "   + pVoeding + " Euro  <br>";
			}
			else
			{
			
				var nn = document.getElementById('select_voeding_warm_selecteerder').options.length;
				if(nn>0)
				 {
				pVoeding = aantalHonden * nn *  aantalmin * ppnVoeding;
				prijstext += "Supermix Service: " + pVoeding + " Euro  <br>";
				}
			}
		}
	}

var hmKorting = 0;	
		if(isVanHM())//VAN HM
		{
					hmKorting = 0 - (nachtenHoog * 3 * aantalHonden) ;
					if(nachtenHoog != 0)
					prijstext += "Van HM korting: " + hmKorting + " Euro <br>";
		}

//KORTINGEN!!!
var korting = 0;
var kortingperc = 1;
var code = document.getElementById('txt_kortingscode').value;
/*
if(code == "111")
	{
	korting = -5;µ
	prijstext += "Nieuwsbrief korting: " + korting + " Euro  <br>";
	}

if(code == "222")
	{
	kortingperc = kortingperc -0.05;
	prijstext += "Nieuwsbrief korting: 5%  <br>";
	}

*/
//Online Boekings korting
//	kortingperc = kortingperc -0.10;
//	prijstext += "Online boekings korting: 10%  <br>";
	
	
//TOTALE KOST
tot = pNormaal + pHoog + pVerwarmd + pWandeling + pSpeel + pZwembad + hmKorting + pVoeding + korting + pKussen;
tot = tot * kortingperc;


msg = prijstext + "<b>" +  "Totaal = " + tot.toFixed(2) + " Euro </b>";

	document.getElementById('lblprijs').innerHTML = msg;
	document.getElementById('HiddenPijs').value = msg;
}
function wijzigAantalHonden(aantal)
{

document.getElementById('radio_hond_aantal_1').checked = false;
document.getElementById('radio_hond_aantal_2').checked = false;
document.getElementById('radio_hond_aantal_3').checked = false;
document.getElementById('radio_hond_aantal_4').checked = false;
document.getElementById('radio_hond_aantal_5').checked = false;
document.getElementById('radio_hond_aantal_'+aantal).checked = true;

document.getElementById('div_hond_1').style.display ='none'; 
document.getElementById('div_hond_2').style.display ='none'; 
document.getElementById('div_hond_3').style.display ='none'; 
document.getElementById('div_hond_4').style.display ='none'; 
document.getElementById('div_hond_5').style.display ='none'; 
for(i = 1; i < aantal+1; i++)
{
document.getElementById('div_hond_'+i).style.display =''; 
}
calculeer();
}
function addDate(control, date)
{
var myctrl = document.getElementById(control);
var size = myctrl.options.length;
var i = 0;
for (i=0; i < size; i++)
	{
		
		var tt = myctrl.options[i].value;
		if(tt == date)
		{
		 return;
		 }
	}
var y=document.createElement('option');
	y.text=date;
	size = document.getElementById(control).size + 1;
	document.getElementById(control).size = size;
	
	
	try
	{
	document.getElementById(control).add(y,null); // standards compliant
	
	
	}
	catch(ex)
	{
	document.getElementById(control).add(y); // IE only
	}
	
	updateDatums(control);
}
function vewijderDatum(control)
{
	
	i = document.getElementById(control).selectedIndex ; 
	if (i > -1)
	{
		document.getElementById(control).remove(i) ; 
		size = document.getElementById(control).size - 1;
		document.getElementById(control).size = size; 
	}
	
	updateDatums(control);
	
}
//chrome adds standard a textnode, remove it!
function initSelect(control)
{
	try
	{
		document.getElementById(control).remove(0) ; 
		document.getElementById(control).size = 0; 
	}
	catch(ex)
	{
	}
}

function updateDatums(control)
{
var cc = "hidden_"+control;
var dates = "";
	for (i=0; i < document.getElementById(control).options.length;
	i++)
	{
	 dates = dates + document.getElementById(control).options[i].text +"!!";
	}
	document.getElementById(cc).value = dates;
	calculeer();
}

function isVanHM()
{
for(i = 1; i < aantalHonden+1;i++)
	{
		 if(document.getElementById('radio_hond'+i+'_vanhm').checked)
		 {
			 return true;	
		 }		 
}
return false;
}
function aantalhonden()
{
	for(i = 1; i<=5;i++)
	{
			 if(document.getElementById('radio_hond_aantal_'+i).checked)
			 {
				 return i;	
			 }		
	}
	return 1;
}

function formatDates(dat_Aankomst,dat_Vertrek)
 {
 //FORMAT Dates!!
 datePickerController.setCursorDate('dp_speelweide', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
 datePickerController.setCursorDate('dp_wandel', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
 datePickerController.setCursorDate('dp_zwembad', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
 datePickerController.setCursorDate('dp_voeding_warm', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
  
  datePickerController.setRangeLow('dp_speelweide', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
  datePickerController.setRangeHigh('dp_speelweide', dat_Vertrek.substr(6,4)+dat_Vertrek.substr(3,2)+dat_Vertrek.substr(0,2));
  datePickerController.setRangeLow('dp_wandel', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
  datePickerController.setRangeHigh('dp_wandel', dat_Vertrek.substr(6,4)+dat_Vertrek.substr(3,2)+dat_Vertrek.substr(0,2));
  datePickerController.setRangeLow('dp_zwembad', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
  datePickerController.setRangeHigh('dp_zwembad', dat_Vertrek.substr(6,4)+dat_Vertrek.substr(3,2)+dat_Vertrek.substr(0,2));
  datePickerController.setRangeLow('dp_voeding_warm', dat_Aankomst.substr(6,4)+dat_Aankomst.substr(3,2)+dat_Aankomst.substr(0,2));
  datePickerController.setRangeHigh('dp_voeding_warm', dat_Vertrek.substr(6,4)+dat_Vertrek.substr(3,2)+dat_Vertrek.substr(0,2));
 }