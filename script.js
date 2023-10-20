$(document).ready(function () {
    // Disable the submit button initially
    $('#submit').prop('disabled', true);

    $('input[type="radio"]').click(function () {
        // Enable the submit button
        $('#submit').prop('disabled', false);

        // Determine if the selected answer is correct
        var isCorrect = $(this).val() === 'correct';

        // Remove background colors from all options in the same question
        var $options = $(this).closest('.question').find('.options label');
        $options.removeClass('correct-option incorrect-option');

        // Highlight the correct options green and all others red
        $options.filter('input[value="correct"]').addClass('correct-option');
        $options.filter(':not(:has(input[value="correct"]))').addClass('incorrect-option');

        // Set feedback based on correctness
        var feedback = isCorrect ? 'Right!' : 'Wrong.';
        var feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';

        $(this).closest('.question').find('.feedback').text(feedback).addClass(feedbackClass);
    });

    $('#submit').click(function () {
        // Calculate the score
        var totalQuestions = $('.question').length;
        var correctAnswers = $('.correct-option').length;

        // Handle the case when all answers are incorrect
        if (totalQuestions === 0) {
            var scoreMessage = 'Your score: 0%';
        } else {
            var score = (correctAnswers / totalQuestions) * 100;
            var scoreMessage = 'Your score: ' + score.toFixed(2) + '%';
        }

        // Display the score to the user
        $('.feedback').text(scoreMessage);
    });
});
