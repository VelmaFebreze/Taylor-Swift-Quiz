$(document).ready(function() {
    // Function to reset the quiz to its initial state
    function resetQuiz() {
      $('input[type="radio"]').prop('disabled', false); // Re-enable radio buttons
      $('.options label').removeClass('correct-option incorrect-option'); // Reset styling
      $('.feedback').empty(); // Clear feedback
      $('#submit').prop('disabled', false); // Re-enable the submit button
    }
  
    // Event handler for when an answer option is clicked
    $('input[type="radio"]').on('click', function() {
      var $question = $(this).closest('.question');
  
      // Disable other options in the same question
      $question.find('input[type="radio"]').prop('disabled', true);
  
      // Determine if the selected answer is correct
      var selectedValue = $(this).val();
      var $feedback = $question.find('.feedback');
  
      if (selectedValue === 'correct') {
        $(this).closest('label').addClass('correct-option');
        $feedback.html('<p class="correct-feedback">Correct!</p>');
      } else {
        $(this).closest('label').addClass('incorrect-option');
        $feedback.html('<p class="incorrect-feedback">Incorrect. The correct answer is marked in green.</p>');
      }
    });
  
    // Event handler for when the "Submit" button is clicked
    $('#submit').on('click', function() {
      // Calculate the score for each question
      var totalQuestions = $('.question').length;
      var correctAnswers = $('.correct-option').length;
      var score = (correctAnswers / totalQuestions) * 100;
  
      // Display the score in the feedback element
      $('.feedback').html('<p>Your score: ' + score + '%</p');
  
      // Disable the submit button after submitting
      $(this).prop('disabled', true);
    });
  
    // Event handler for when the "Restart" button is clicked
    $('#restart').on('click', function() {
      resetQuiz();
    });
  });
  