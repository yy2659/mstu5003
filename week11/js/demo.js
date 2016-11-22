// GLOBAL VARIABLES
var piesData = [
	{
		id: "1a",
		pieName: "Apple Pie",
		url: "http://images-gmi-pmc.edge-generalmills.com/36452ba2-648c-4c67-90f7-3a1fc36cf6f4.jpg"
	},
	{
		id: "2b",
		pieName: "Pecan Pie",
		url: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/4/27/1/WU0213H_pecan-pie_s4x3.jpg.rend.sni12col.landscape.jpeg"
	},
	{
		id: "3c",
		pieName: "Keylime Pie",
		url: "http://www.biggirlssmallkitchen.com/wp-content/uploads/2015/03/pie3-690x460.jpg"
	},
	{
		id: "4d",
		pieName: "Strawberry Pie",
		url: "https://images-gmi-pmc.edge-generalmills.com/e6f6a480-bcec-44ad-a057-b107b9810d6b.jpg"
	},
	{
		id: "5e",
		pieName: "Banana Creme Pie",
		url: "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps26090_THAT2453289D12_14_5b_WEB.jpg"
	}
];

function getById(list, id) {
	var targetItem = list.find(function(listItem) {
		return listItem.id === id;
	});

	return targetItem;
}

function displayPie(pieObj) {
	var modalImgEl = document.querySelector('#pieModal img');
			modalImgEl.src = pieObj.url;

	var modalTitleEl = document.querySelector('#pieModal .modal-title');
			modalTitleEl.innerHTML = pieObj.pieName;
}


// Let's create the list.
piesData.forEach(function(pie) {
  var pieListEl = document.querySelector('#pie-list');

	// Instead of templtes - we're creating an li object through JS
	var pieItemEl = document.createElement('li');
			pieItemEl.id = pie.id;
			pieItemEl.classList.add('pieItem');
			pieItemEl.innerHTML = pie.pieName;
			// E.g. end result = <li id="1a" class="pieItem">Apple Pie</li>

	pieListEl.appendChild(pieItemEl);
});

// I want the clicking to set the source
// The event handler - rather than creating a bunch...
var pieListEl = document.querySelector('#pie-list');

		pieListEl.addEventListener('click', function(event) {
			console.log(event.target); 				// Node that is actually clicked
			console.log(event.currentTarget); // Node that listener is on

			// EVENT Bubbling... What?
			if (event.target && event.target.matches('li.pieItem')) {
				var targetPie = getById(piesData, event.target.id);
				displayPie(targetPie);
			} else {
				alert('Clicked element that is not an li.pieItem');
			}
		});


// INITIALIZING MODAL http://getbootstrap.com/javascript/#modal-usage
$('#pieModal').modal({
	backdrop: true, // what if we change this to false?
	keyboard: false, // what if we change this to false?
	show: true, // what if we change this to true?
});

// METHODS of the modal http://getbootstrap.com/javascript/#modals-methods
// TRIGGERING the modal
document.getElementById('modalButton').addEventListener('click', function(event) {
	$('#pieModal').modal('show');
});
