
$(function () {
    //Selectores
    var pageNav = $('#pageNav'),
        cardCurrentMatch = $('#cardCurrentMatch'),
        currentMatchHomeTeam = $('#currentMatchHomeTeam'),
        currentMatchAwayTeam = $('#currentMatchAwayTeam'),
        currentMatchMinute = $('#currentMatchMinute'),
        currentMatchHomeGoals = $('#currentMatchHomeGoals'),
        currentMatchHomePenalties = $('#currentMatchHomePenalties'),
        currentMatchAwayGoals = $('#currentMatchAwayGoals'),
        currentMatchAwayPenalties = $('#currentMatchAwayPenalties'),
        currentMatchHomeYellowCard = $('#currentMatchHomeYellowCard'), 
        currentMatchHomeRedCards = $('#currentMatchHomeRedCards'),
        currentMatchAwayYellowCard = $('#currentMatchAwayYellowCard'),
        currentMatchAwayRedCards = $('#currentMatchAwayRedCards'),
        cardTemplate = $('#cardTemplate').html(),
        cardContent = $('#cardContent');

    var tabsItems= $('.tabs__item');
    var tabsContents= $('.tabs__content');
   
    
    //statements
    pageNav.sticky({
    //topSpacing: 25,
        zIndex:10,
    });

    var template = Handlebars.compile(cardTemplate)
  

    var setCurrentMatchValues = function(data) {

          /*Match*/
          var firstMatch = data[0]
          var time = firstMatch.time;

          /*HomeTeam*/
          var homeTeam = firstMatch.home_team.country,
              homeGoals = firstMatch.home_team.goals,
              homePenalties = firstMatch.home_team.penalties,
              homeYellowCards = firstMatch.home_team_statistics.yellow_cards,
              homeRedCards = firstMatch.home_team_statistics.red_cards;
       

          /*AwayTeam*/
          var awayTeam = firstMatch.away_team.country,
              awayGoals = firstMatch.away_team.goals,
              awayPenalties = firstMatch.away_team.penalties,
              awayYellowCards = firstMatch.away_team_statistics.yellow_cards,
              awayRedCards = firstMatch.away_team_statistics.red_cards;


          /*Set Values*/
          currentMatchMinute.text(time);
          currentMatchHomeTeam.text(homeTeam); 
          currentMatchAwayTeam.text(awayTeam);
          currentMatchHomeGoals.text(homeGoals);
          currentMatchHomePenalties.text(homePenalties);
          currentMatchAwayGoals.text(awayGoals);
          currentMatchAwayPenalties.text(awayPenalties);
          currentMatchHomeYellowCard.text(homeYellowCards);
          currentMatchHomeRedCards.text(homeRedCards);
          currentMatchAwayYellowCard.text(awayYellowCards);
          currentMatchAwayRedCards.text(awayRedCards);
    };

    //Request
    $.ajax ('https://worldcup.sfg.io/matches/current', {
        beforeSend: function () {
            cardCurrentMatch.addClass ('loading');
        },
        success: function(data) {
            //setCurrentMatchValues(data);
            var myCard = template(data[0]);
            cardContent.append(myCard);
           
        },
        error: function(jqXHR, textstatus) { 
            alert ('Sólo se permiten 10 peticiones por minuto');

        },
        complete: function(){
            cardCurrentMatch.removeClass('loading');
        }
    })
        //.done(setCurrentMatchValues);
        
        //Lightbox conf.

        lightbox.option({
            albumLabel: "Imagen %1 de %2",
            disableScrolling: true,
            possitionFromTop: 100,
            fadeDuration: 1000,
            imageFadeDuration: 1000,
            wrapAround: true,

        });

        //Tambs component

        tabsItems.on('click', function() {

            //Se obtiene el número de íncide que ocupa el item al que hacemis clic
            var indexItem = tabsItems.index(this);

            

            //Se elimina la clase 'active' a todos los items
            tabsItems.removeClass('active');

            //Se elimina la clase 'active' a todos los contents
             tabsContents.removeClass('active')

            //Se añade la clase 'active' al item sobre el que hace clic
            $(this).addClass('active');
            $(tabsContents[indexItem]).addClass('active');

        });

});