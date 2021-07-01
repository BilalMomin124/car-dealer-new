$(function () {
	if ($(".price-slide, .price-slide-2").length > 0) {
		$("#slider-milage").slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function (event, ui) {
				var min = ui.values[0],
					max = ui.values[1];
				$('#' + this.id).prev().val("Mi. " + min + " - Mi. " + max);
			}
		});
		$("#slider-range").slider({
			range: true,
			min: 1000,
			max: 50000,
			values: [1000, 50000],
			slide: function (event, ui) {
				var min = ui.values[0],
					max = ui.values[1];
				$('#' + this.id).prev().val("$" + min + " - $" + max);
			}
		});
	}

	var carsDetailsArr = [
		{
			carImage: "images/blog/grid/pic1.jpg",
			carName: "GTA 5 Lowriders DLC",
			basicInfo: ["23.9 kmpl", "624 cc", "4 Seats", "Manual"],
			carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..",
			CarPrice: "$ 2.41 Lakh",
		},
		{

			carImage: "images/blog/grid/pic2.jpg",
			carName: "GTA ",
			basicInfo: ["23.9 kmpl", "624 cc", "4 Seats", "Manual"],
			carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..",
			CarPrice: "$ 3.41 Lakh",
		},

		{
			carImage: "images/blog/grid/pic3.jpg",
			carName: "GTA 5",
			basicInfo: ["23.9 kmpl", "624 cc", "4 Seats", "Manual"],
			carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..",
			CarPrice: "$ 1.41 Lakh",
		},
		{
			carImage: "images/blog/grid/pic4.jpg",
			carName: "DLC",
			basicInfo: ["23.9 kmpl", "624 cc", "4 Seats", "Manual"],
			carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..",
			CarPrice: "$ 2.50 Lakh",
		},
		{
			carImage: "images/blog/grid/pic2.jpg",
			carName: "Lowriders",
			basicInfo: ["23.9 kmpl", "624 cc", "4 Seats", "Manual"],
			carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..",
			CarPrice: "$ 5.41 Lakh",

		},
		{
			carImage: "images/blog/grid/pic3.jpg",
			carName: "GTA 5 Lowriders DLC",
			basicInfo: ["23.9 kmpl", "624 cc", "4 Seats", "Manual"],
			carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..",
			CarPrice: "$ 9.41 Lakh",
		}

	]
	$.each("carDetailsCard", function (i, v) {
		console.log(v)

	});
	$("#carDetailsCard").append(`
		<div class="blog-post blog-md clearfix date-style-2 list-view m-b30" >
		<div class="dlab-post-media dlab-img-effect zoom-slow">
          <a href="#"><img src="images/blog/grid/pic3.jpg" alt=""></a>
          </div>

		  <div class="dlab-post-info">
		  <div class="dlab-post-title ">
			  <h3 class="post-title"><a href="car-details-overview.html">GTA 5
					  Lowriders DLC</a></h3>
		  </div>
		  <div class="dlab-post-text">
			  <p>Lorem Ipsum is simply dummy text of the printing and typesetting
				  industry. Lorem Ipsum has been the industry's standard dummy..
			  </p>
		  </div>
		  <div class="dlab-post-readmore">
			  <h2 class="m-a0 pull-left m-r15 open-sans">$ 2.41 Lakh</h2>
			  <a href="#" title="READ MORE" rel="bookmark" class="site-button"
				  data-toggle="modal" data-target="#car-details">DETAILS</a>
		  </div>
		  <div class="dlab-post-tags">
			  <div class="post-tags">
				  <a href="#">23.9 kmpl</a>
				  <a href="#">624 cc</a>
				  <a href="#">4 Seats</a>
				  <a href="#">Manual</a>
			  </div>
		  </div>
	  </div>
		`)



});


