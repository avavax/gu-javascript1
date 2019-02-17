$section = document.querySelectorAll('.section__title');
$currentSection = $section[0];
$currentSection.nextElementSibling.style.height = $currentSection.nextElementSibling.scrollHeight + 'px';

$section.forEach(function($el) {
	$el.addEventListener('click', function() {
		if ($el !== $currentSection) {
			$currentSection.nextElementSibling.style.height = '0';
			$currentSection = $el;
			$el.nextElementSibling.style.height = $el.nextElementSibling.scrollHeight + 'px';
		};
	});
}); 