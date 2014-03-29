'use strict';

crushtell.controller('setupController',
  ['$scope', '$http',
	function ($scope, $http)
{
	// Setting up variables needed for alerts and notification system.
	var user = $scope.user = {
		name: '',
		email: '',
    gender: '',                   // m, f; default is 'false'
    interestedInMen: false,
    interestedInWomen: false,
    direction: '',
		keywords: '',
		location: [],
		neighborhoods: [],
    results: [],
		submit: function submit() {
      this.prepareLoad();

      // Change keywords to array before sending to server.
      var load = {
        keywords: this.keywords.split(','),
        neighborhoods: this.neighborhoods,
        minAge: this.minAge,
        maxAge: this.maxAge,
        email: this.email
      };

			$http.post('/submit', load)
			.success(function (data) {
        console.log(JSON.parse(data.body));
        var craigslist = JSON.parse(data.body);
        user.results = craigslist.results.collection1;
			})
			.error(function (data) {
				console.log('Error: ');
				console.log(data);
			});
		},
    getlistings: function getlistings() {
      this.prepareLoad();

      var load = {
        keywords: this.keywords.split(','),
        neighborhoods: this.neighborhoods,
        minAge: this.minAge,
        maxAge: this.maxAge,
        email: this.email
      };

      $http.post('/getlistings', load)
      .success(function (data) {
        console.log(JSON.parse(data.body));
        var craigslist = JSON.parse(data.body);
        user.results = craigslist.results.collection1;
      })
      .error(function (data) {
        console.log('Error: ');
        console.log(data);
      });
    },
    prepareLoad: function prepareLoad() {
      if (this.interestedInMen)
        this.direction = 'm4' + this.gender;
      else if (this.interestedInWomen)
        this.direction = 'w4' + this.gender;
      this.keywords = this.keywords + ',' + this.direction;
    }
	};

	var allNeighborhoods = $scope.allNeighborhoods = [{"id":"nh_46","name":"alameda"},{"id":"nh_47","name":"albany / el cerrito"},{"id":"nh_48","name":"berkeley"},{"id":"nh_49","name":"berkeley north / hills"},{"id":"nh_142","name":"brentwood / oakley"},{"id":"nh_51","name":"concord / pleasant hill / martinez"},{"id":"nh_52","name":"danville / san ramon"},{"id":"nh_53","name":"dublin / pleasanton / livermore"},{"id":"nh_112","name":"emeryville"},{"id":"nh_154","name":"fairfield / vacaville"},{"id":"nh_54","name":"fremont / union city / newark"},{"id":"nh_55","name":"hayward / castro valley"},{"id":"nh_56","name":"hercules, pinole, san pablo, el sob"},{"id":"nh_57","name":"lafayette / orinda / moraga"},{"id":"nh_58","name":"oakland downtown"},{"id":"nh_59","name":"oakland east"},{"id":"nh_60","name":"oakland hills / mills"},{"id":"nh_61","name":"oakland lake merritt / grand"},{"id":"nh_62","name":"oakland north / temescal"},{"id":"nh_63","name":"oakland piedmont / montclair"},{"id":"nh_66","name":"oakland rockridge / claremont"},{"id":"nh_64","name":"oakland west"},{"id":"nh_113","name":"pittsburg / antioch"},{"id":"nh_65","name":"richmond / point / annex"},{"id":"nh_67","name":"san leandro"},{"id":"nh_68","name":"vallejo / benicia"},{"id":"nh_69","name":"walnut creek"},{"id":"nh_149","name":"alamo square / nopa"},{"id":"nh_110","name":"bayview"},{"id":"nh_3","name":"bernal heights"},{"id":"nh_4","name":"castro / upper market"},{"id":"nh_5","name":"cole valley / ashbury hts"},{"id":"nh_6","name":"downtown / civic / van ness"},{"id":"nh_7","name":"excelsior / outer mission"},{"id":"nh_8","name":"financial district"},{"id":"nh_9","name":"glen park"},{"id":"nh_11","name":"haight ashbury"},{"id":"nh_12","name":"hayes valley"},{"id":"nh_13","name":"ingleside / SFSU / CCSF"},{"id":"nh_14","name":"inner richmond"},{"id":"nh_15","name":"inner sunset / UCSF"},{"id":"nh_16","name":"laurel hts / presidio"},{"id":"nh_10","name":"lower haight"},{"id":"nh_20","name":"lower nob hill"},{"id":"nh_24","name":"lower pac hts"},{"id":"nh_17","name":"marina / cow hollow"},{"id":"nh_18","name":"mission district"},{"id":"nh_19","name":"nob hill"},{"id":"nh_21","name":"noe valley"},{"id":"nh_22","name":"north beach / telegraph hill"},{"id":"nh_23","name":"pacific heights"},{"id":"nh_164","name":"portola district"},{"id":"nh_25","name":"potrero hill"},{"id":"nh_26","name":"richmond / seacliff"},{"id":"nh_27","name":"russian hill"},{"id":"nh_1","name":"SOMA / south beach"},{"id":"nh_28","name":"sunset / parkside"},{"id":"nh_156","name":"tenderloin"},{"id":"nh_157","name":"treasure island"},{"id":"nh_29","name":"twin peaks / diamond hts"},{"id":"nh_2","name":"USF / panhandle"},{"id":"nh_118","name":"visitacion valley"},{"id":"nh_30","name":"western addition"},{"id":"nh_114","name":"west portal / forest hill"},{"id":"nh_31","name":"campbell"},{"id":"nh_32","name":"cupertino"},{"id":"nh_33","name":"gilroy"},{"id":"nh_158","name":"hollister"},{"id":"nh_34","name":"los gatos"},{"id":"nh_109","name":"milpitas"},{"id":"nh_119","name":"morgan hill"},{"id":"nh_35","name":"mountain view"},{"id":"nh_36","name":"san jose downtown"},{"id":"nh_37","name":"san jose east"},{"id":"nh_38","name":"san jose north"},{"id":"nh_39","name":"san jose south"},{"id":"nh_40","name":"san jose west"},{"id":"nh_41","name":"santa clara"},{"id":"nh_43","name":"saratoga"},{"id":"nh_44","name":"sunnyvale"},{"id":"nh_45","name":"willow glen / cambrian"},{"id":"nh_70","name":"atherton"},{"id":"nh_71","name":"belmont"},{"id":"nh_73","name":"brisbane"},{"id":"nh_74","name":"burlingame"},{"id":"nh_115","name":"coastside/pescadero"},{"id":"nh_75","name":"daly city"},{"id":"nh_76","name":"east palo alto"},{"id":"nh_77","name":"foster city"},{"id":"nh_161","name":"half moon bay"},{"id":"nh_78","name":"los altos"},{"id":"nh_79","name":"menlo park"},{"id":"nh_80","name":"millbrae"},{"id":"nh_81","name":"mountain view"},{"id":"nh_82","name":"pacifica"},{"id":"nh_83","name":"palo alto"},{"id":"nh_163","name":"portola valley"},{"id":"nh_84","name":"redwood city"},{"id":"nh_85","name":"redwood shores"},{"id":"nh_86","name":"san bruno"},{"id":"nh_87","name":"san carlos"},{"id":"nh_88","name":"san mateo"},{"id":"nh_89","name":"south san francisco"},{"id":"nh_162","name":"woodside"},{"id":"nh_91","name":"corte madera"},{"id":"nh_92","name":"fairfax"},{"id":"nh_93","name":"greenbrae"},{"id":"nh_155","name":"healdsburg / windsor"},{"id":"nh_94","name":"kentfield / ross"},{"id":"nh_152","name":"lake county"},{"id":"nh_95","name":"larkspur"},{"id":"nh_153","name":"mendocino county"},{"id":"nh_96","name":"mill valley"},{"id":"nh_97","name":"napa county"},{"id":"nh_98","name":"novato"},{"id":"nh_99","name":"petaluma"},{"id":"nh_117","name":"rohnert pk / cotati"},{"id":"nh_143","name":"russian river"},{"id":"nh_101","name":"san anselmo"},{"id":"nh_102","name":"san rafael"},{"id":"nh_103","name":"santa rosa"},{"id":"nh_104","name":"sausalito"},{"id":"nh_105","name":"sebastopol"},{"id":"nh_106","name":"sonoma"},{"id":"nh_108","name":"tiburon / belvedere"},{"id":"nh_107","name":"west marin"},{"id":"nh_144","name":"aptos"},{"id":"nh_148","name":"boulder creek"},{"id":"nh_145","name":"capitola"},{"id":"nh_42","name":"santa cruz"},{"id":"nh_146","name":"scotts valley"},{"id":"nh_151","name":"soquel"},{"id":"nh_147","name":"watsonville"}];

	$scope.filterNeighborhoods = {
		placeholder: 'Filter by Neighborhood',
    allowClear: true,
    multiple: true
  };
}]);

crushtell.controller('crushesController',
  ['$scope', '$http',
	function ($scope, $http)
{
  // Initialize variables needed.
  var crushes = $scope.crushes = [];

  // Post PsetID. If exists, then set data. Otherwise, redirect to root.
  $http.post('/getlistings', {crushId: $routeParams.crushId} )
  .success(function (data) {
    crushes = data;
  })
  .error(function (data) {
    $location.path('/');
    console.log('Server error: ' + data);
  });
}]);