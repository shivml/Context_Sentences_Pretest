PennController.ResetPrefix(null);
PennController.DebugOff()

//screen 1
PennController("Screen1",
newHtml("consent", "screen1.html")
    .print()
,
newButton("Weiter", "Weiter")
    .print()
    .wait(
        getHtml("consent").test.complete()
            .failure( getHtml("consent").warn() )
    )
    )
//welcome screen
PennController("Welcome",
    newText("firstinfo", "Um an unserem Experiment teilnehmen zu k&ouml;nnen, ben&ouml;tigen wir Angaben zu Ihrer Person. Diese werden anonym ausgewertet, genauere Informationen entnehmen Sie bitte dem Probanden Informationsblatt.<p>")    
        .settings.css("font-size", "20px")
        .settings.italic()
    ,
    newCanvas("infocanvas", 1000, 80)
        .settings.add(0, 0, getText("firstinfo") )
        .print()  
    ,
    newDropDown("age", "")
        .settings.add( "unter 18", "18" , "19" , "20", "21" , "22" , "23", "24" , "25" , "26", "27" , "28" , "29", "30" , "31" , "&uuml;ber 31")
        .settings.log()    
               ,
    newText("agetext", "Alter:")
          .settings.css("font-size", "20px")
          .settings.bold()
          
    
    ,
    newCanvas("agecanvas", 1000, 45)
        .settings.add(0, 10, getText("agetext") )
        .settings.add(100, 8, getDropDown("age") )
        .settings.log()
        .print()    
    ,
    newText("Muttersprache", "Ist Deutsch Ihre Muttersprache?")
         .settings.css("font-size", "20px")
         .settings.bold()
    ,
    newDropDown("NativeLang", "" )
        .settings.add( "Ja", "Nein")
        .settings.log()
    ,
    newCanvas("Langcanvas", 1000, 45)
        .settings.add(0, 0, getText("Muttersprache") )
        .settings.add(300, 3, getDropDown("NativeLang") )
        .print()
    ,
    newText("Geschlecht", "Geschlecht:")
       .settings.css("font-size", "20px")
       .settings.bold()
    ,
    newDropDown("sex", "" )
         .settings.add( "&nbsp;weiblich&nbsp;", "&nbsp;m&auml;nnlich&nbsp;", "&nbsp;divers&nbsp;")
         .settings.log()
    ,
    newCanvas("sexcanvas", 1000, 45)
        .settings.add(0, 0, getText("Geschlecht") )
        .settings.add(120, 3, getDropDown("sex") )
        .print()
    ,
    newText("SpracheTest", "Haben Sie bis zum 6 Lebensjahr au&szlig;er Deutsch eine weitere Sprache gelernt?")
         .settings.css("font-size", "20px")
         .settings.bold()
    ,
    newTextInput("und zwar", "")
         .settings.log()
         .settings.hidden()
    ,
    newText("label input", "")
        .settings.after( getTextInput("und zwar") )
    ,
    newDropDown("language", "")
        .settings.add("nein", "ja")
        .settings.log()
                 
   ,
    newCanvas("languagecanvas", 1000, 30)
        .settings.add(0, 0, getText("SpracheTest") )
        .settings.add(690, 2, getDropDown("language") )
        .print()
    ,
        newButton("okay", "Weiter")
        .print()
        .wait()
      
    ,
     
     getDropDown("age")
    .test.selected()
    .success()
    .failure(
        newText("Bitte geben Sie ihr Alter an.")
        .settings.color("red")
        .print())   
    ,
    getDropDown("NativeLang")
    .test.selected()
    .success()
    .failure(
        newText("Bitte geben Sie ihr Muttersprache an.")
        .settings.color("red")
        .print())
    ,
    getDropDown("sex")
    .test.selected()
    .success()
    .failure(
        newText("Bitte geben Sie ihr Geschlecht an.")
        .settings.color("red")
        .print())
    ,
    getDropDown("language")
    .test.selected()
    .success()
    .failure(
        newText("Bitte beantworten Sie die Frage zum fr&uuml;hen Spracherwerb.")
        .settings.color("red")
        .print())      
    ,
    getDropDown("age").wait("first")
    ,
    getDropDown("NativeLang") .wait ("first")
    ,
    getDropDown("sex").wait("first")
    ,
    getDropDown("language").wait("first")
    ,
        getButton("okay")
        .print()
        .wait()

)      
//end of welcome screen
    
//Examples Screen
   
PennController( "instructions" ,
    newText("info1", "<p>In diesem Experiment werden Sie S&auml;tze lesen und zu diesen Fragen beantworten.<p>")
    .settings.css("font-size", "20px")
    .print()
    ,
    newText("explanation1", "Sie lesen zun&auml;chst einen Satz, der den Beginn einer &Auml;u&szlig;erung einleitet. Daraufhin sollen Sie diesen einleitenden Satz dahingehend bewerten, wie formell oder informell eine m&ouml;gliche folgende Situation Ihrer Meinung nach sein w&uuml;rde. ")
        .settings.css("font-size", "20px")
        .print()
    ,
    newText ("explanation2", "<p>Bitte bewerten Sie den einleitenden Satz auf einer Skala von 0 (sehr informell) bis 50 (sehr formell). Es gibt bei der Bewertung kein Richtig oder Falsch, wir sind nur an Ihrer intuitiven Einsch&auml;tzung als MutterschprachlerIn interessiert. Bitte denken Sie bei der Beantwortung nicht zu lange nach, sondern bewerten Sie nach Bauchgef&uuml;hl.<p>")
        .settings.css("font-size", "20px")
        .print()
    ,
    newButton("Weiter")
        .print()
        .wait()
)
//Examples Screen
    
        
PennController.ResetPrefix(null);

PennController( "examples" ,
    newText("Zu Ihrer Orientierung sind hier 2 Beispiele:")
       .settings.css("font-size", "18")
       .print()
    ,
    newText("<p>1. Beispiel:<p>")
       .settings.css("font-size", "18")
       .print()
    ,
    newText("sentence1", "Marion quakt gechillt:")
        .settings.css("font-size", "20")
        .settings.italic()
        .print()
    ,
    newText ("explanation1", "Sie k&ouml;nnten diesen einleitenden Satz eher informell bewerten und eine nach dem Doppelpunkt beschriebene Situation als sehr informell einsch&auml;tzen. Eine m&ouml;gliche Situation k&ouml;nnte eine entspannte Unterhaltung unter Teenagern sein. Wenn dem so ist, dann k&ouml;nnten Sie eine 0 oder einen sonstigen niedrigen Wert vergeben.")
    .settings.css("font-size", "18")
    .print()
    ,
    newText("<p>2. Beispiel:<p>")
       .settings.css("font-size", "18")
       .print()
    ,
    newText("sentence2", "Eloquent er&ouml;rtert Hans seine Pr&auml;sumtion:")
       .settings.css("font-size", "20")
       .settings.italic()
       .print()
    ,
    newText ("explanation2", "Sie k&ouml;nnten diesen einleitenden Satz eher formell bewerten und eine nach dem Doppelpunkt beschriebene Situation als sehr formell insch&auml;tzen. Eine m&ouml;gliche Situation k&ouml;nnte ein Vortrag eines hochrangigen Arztes auf einem &Auml;rztekongress sein. Wenn dem so ist, dann k&ouml;nnten Sie eine 50 oder einen sonstigen hohen Wert vergeben.")
    .settings.css("font-size", "18")
    .print()
    ,
    newText ("<p>Das Experiment dauert ungef&auml;hr 15 Minuten. <br/>Um Sie mit der Aufgabe vertraut zu machen, folgen nun 2 &Uuml;bungen.<p>")
          .settings.css("font-size", "18px")
         .print()
    ,
    newButton("&Uuml;bungen beginnen")
        .print()
        .wait()
)
 //TRIAL RUN

PennController( "trials" ,
    newText("Der Mann neben ihr redete sie leise an:")
         .settings.css("font-size", "25px")
         .settings.center()
         .settings.italic()
         .print()
    ,
newText("q1", "<p>Wie formell / informell sch&auml;tzen Sie die Situation ein, die dieser Satz einleitet?<p>")
        .settings.css("font-size", "20px")
        .settings.center()      
        .print()
       ,

 newScale("slider1","0", "1","2","3","4","5","6","7","8","9", "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49", "50")
.settings.center()
.settings.before( newText("informell", "0 <br /> (sehr <br/> informell)") )
.settings.after( newText("formell", "50 <br /> (sehr formell)") )
.settings.size (1200)
.settings.labelsPosition("bottom")
.print()
.settings.log()
.wait()
//.remove()
    ,  
         newButton("best1", "best&auml;tigen")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    
    getText("q1")
        .remove()
    ,   
    getScale("slider1")
        .remove()
    ,   
    getButton("best1")
        .remove()      
)
                
PennController( "example2" ,
    newText("Der Profi erw&auml;hnte vor seinen Fans:")
         .settings.css("font-size", "25px")
         .settings.center()
         .settings.italic()
         .print()
    ,
newText("q2", "<p>Wie formell / informell sch&auml;tzen Sie die Situation ein, die dieser Satz einleitet?<p>")
        .settings.css("font-size", "20px")
        .settings.center()       
        .print()
       ,
newScale("slider2", "0","1","2","3","4","5","6","7","8","9", "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49", "50")
.settings.center()
.settings.before( newText("informell", "0 <br /> (sehr informell)") )
.settings.after( newText("formell", "50 <br /> (sehr formell)") )
.settings.size (1200)
.settings.labelsPosition("bottom")
.print()
.settings.log()
.wait()
 //   .remove()
         ,  
    newButton("best2", "best&auml;tigen")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
    getText("q2")
        .remove()
    ,   
    getScale("slider2")
        .remove()
    ,   
    getButton("best2")
        .remove()    
    )
    
    //end of TRIAL RUN
   PennController( "introduction" ,
    newText("<p>Das waren die Beispiele.<p>")
       .settings.css("font-size", "20px")
       .print()
    ,
    newText("explanation", "Jetzt beginnen wir das Experiment. Viel Spa&szlig;!<p>")
       .settings.css("font-size", "20px")
    ,
    newCanvas("explanationcanvas",1000, 120)
        .settings.add(0, 0, getText("explanation") )
        .print()    
    ,
    newButton("Experiment beginnen")
        .print()
        .wait()
         );
   
    //EXPERIMENT
    
    
PennController.Template( PennController.GetTable("Context_Sentences_Final.csv"),
    variable => PennController("Context_Sentences_Final",
    
   
 newText("ContextSentences", variable.SocStat_text)
     .settings.css("font-size", "25px")
     .settings.center()
     .settings.italic()                          
     .print()
   ,
    
newText("question", "<p>Wie formell / informell sch&auml;tzen Sie die Situation ein, die dieser Satz einleitet?<p>")
        .settings.css("font-size", "20px")
        .settings.center()
        .print()
    ,
newScale("slider","0","1","2","3","4","5","6","7","8","9", "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49", "50")
.settings.center()
.settings.before( newText("informell", "0 <br /> (sehr informell)") )
.settings.after( newText("formell", "50 <br /> (sehr formell)") )
.settings.size (1200)
.settings.labelsPosition("bottom")
.print()
.settings.log()
.wait()
// .remove()
     ,                          
     newButton("best", "best&auml;tigen")
        .settings.center()
        .print()
        .wait()
        .remove()
    ,
   
    getText("question")
        .remove()
    ,   
    getScale("slider")
        .remove()
    ,   
    getButton("best")
        .remove()    
   
.log( "Item" , variable.Item )
.log ( "expSet" , variable.expSet )
.log ( "WP1_match" , variable.WP1_match )
.log ( "Status" , variable.SocStat_context )
.log ( "Context_Sent" , variable.SocStat_text )
                         ))
                                           
PennController.SendResults( "send" );  

//Final Page

PennController( "final" ,
    newText("<p>Vielen Dank f&uuml;r Ihre Teilnahme!</p>")
        .settings.css("font-size", "25px")
        .print()
     ,
     newText("<p>Bitte geben Sie den folgenden Code bei Clickworker ein, um ihr Honorar zu erhalten</p>")
        .settings.css("font-size", "25px")
        .settings.bold()        
        .print()
     ,
     newText("<p>R3G1ST3R_C0NT3XT</p>")
        .settings.css("font-size", "25px")
        .settings.bold()        
        .print()
     ,
     newButton("void")
        .wait()
)
