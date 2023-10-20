$(document).ready(function () {
    // Disable the submit button initially
    $('#submit').prop('disabled', true);

    $('input[type="radio"]').click(function () {
        // Disable all radio buttons within the same question
        var questionName = $(this).attr('name');
        $('input[name="' + questionName + '"]').attr('disabled', true);

        // Enable the submit button
        $('#submit').prop('disabled', false);

        // Determine if the selected answer is correct
        var isCorrect = $(this).val() === 'correct';

        // Highlight the correct options green and all others red
        $(this).closest('.question').find('.options label').addClass('incorrect-option');
        $(this).closest('.question').find('input[value="correct"]').parent().removeClass('incorrect-option').addClass('correct-option');

        // Set feedback based on correctness
        var feedback = isCorrect ? 'Right!' : 'Wrong.';
        var feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
        
        $(this).closest('.question').find('.feedback').text(feedback).addClass(feedbackClass);
    });

    $('#submit').click(function () {
        // You can add any additional functionality when the user submits the quiz here
        // For example, you can calculate and display the total score
        // This is where you can show the total score or perform other actions
    });
});
