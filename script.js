(function () {
    var Question = function (question, answers, correct) {
        this.question = question,
            this.answers = answers,
            this.correct = correct;
    }
    Question.prototype.displayQuest = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        };
    }
    Question.prototype.ansTest = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Bonne réponse !');
            sc = callback(true);

        } else {
            console.log('Mauvaise réponse ...');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function (score) {
        console.log('/o/ ~ \\o\\ ~ \\o/ ~ /o/ ~ \\o\\');
        console.log('votre score est de ' + score + ' points !');
        console.log('/o/ ~ \\o\\ ~ \\o/ ~ /o/ ~ \\o\\');

    }


    var q1 = new Question('Quelle est la plus grande île de la Méditerranée ?', ['La Sicile', 'La Corse', 'La Sardaigne'], 0);
    var q2 = new Question('Quel sport pratiquait Maurice Herzog ?', ['Le cyclisme', 'La natation', 'L\'alpinisme'], 2);
    var q3 = new Question('Quel roi des Anglais du VIème siècle combattit les envahisseurs saxons, puis devint un personnage de légende incarnant le roi idéal ?', ['Jean De Gand', 'Le roi Arthur', 'Henri VIII'], 1);
    var q4 = new Question('Comment se nomme un vers de 12 syllabes ?', ['Double sixain', 'Alexandrin', 'Bombyx'], 1);
    var q5 = new Question('Elle chante, elle garde des enfants et vole grâce à son parapluie. Qui est elle ?', ['Bécassine', 'Polly Anna', 'Mary Poppins'], 2);
    var q6 = new Question('Comment s\'appelle une personne qui pratique un sport sans toucher une rémunération ?', ['Bénévole', 'Amateur', 'Désintéressé'], 1);
    var q7 = new Question('Comment s\'appellent les journées très chaudes lors desquelles Sirius et le soleil se lèvent et se couchent en même temps ?', ['Canicule', 'Turpitude', 'Solstice d\'été', 'Torpeur'], 0);
    var q8 = new Question('Quel dessinateur a créé Gaston Lagaffe ?', ['Uderzo', 'Franquin', 'Uderzo et Goscinny'], 1);
    var q9 = new Question('Un guéridon est une table qui n\'a qu\'un ... . ?', ['Bras', 'Pied', 'Tiroir'], 1);
    var q10 = new Question('Quel était le slogan de campagne de François Mitterrand en 1981 ?', ['La force tranquille', 'La force calme', 'La force paisible', 'Mangez des pommes'], 0);

    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
                return sc;
            } else {
                return sc;
            }
        }
    }

    var keepScore = score();

    function reloadGame() {

        var rnd = Math.floor(Math.random() * questions.length);

        questions[rnd].displayQuest();

        var ans = prompt('Entrez votre réponse, ou "exit" pour quitter le jeu');

        if (ans !== 'exit') {
            questions[rnd].ansTest(parseInt(ans), keepScore);
            reloadGame();
        } else {
            console.log('Partie terminée.');
        }
    }

    reloadGame();

})();