exports.seed = function(knex) {
  return knex('trips').insert([
    {
      title: 'Backpacking Mt Rainier',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 1,
      image: '',
      duration: 7,
      distance: 35,
      date: '2018-07-15',
      tripType: 'Backpacking',
      user_id: 1
    },
    {
      title: 'Backpacking Utah',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 1,
      isProfessional: 1,
      image: '',
      duration: 5,
      distance: 25,
      date: '2018-08-20',
      tripType: 'Backpacking',
      user_id: 1
    },
    {
      title: 'Backpacking the Grand Canyon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 0,
      image: '',
      duration: 5,
      distance: 40,
      date: '2019-06-01',
      tripType: 'Backpacking',
      user_id: 1
    },
    {
      title: 'Backpacking Florida',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 1,
      isProfessional: 0,
      image: '',
      duration: 5,
      distance: 25,
      date: '2019-02-23',
      tripType: 'Backpacking',
      user_id: 1
    },
    {
      title: 'Backpacking Mt Rushmore',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 1,
      image: '',
      duration: 10,
      distance: 50,
      date: '2018-03-04',
      tripType: 'Backpacking',
      user_id: 1
    },
    {
      title: 'Climbing Rocks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 1,
      image: '',
      duration: 2,
      distance: 10,
      date: '2018-03-04',
      tripType: 'Rockclimbing',
      user_id: 2
    },
    {
      title: 'Climbing Rocks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 1,
      isProfessional: 0,
      image: '',
      duration: 3,
      distance: 20,
      date: '2019-02-10',
      tripType: 'Rockclimbing',
      user_id: 2
    },
    {
      title: 'Climbing Big Rocks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 0,
      image: '',
      duration: 3,
      distance: 20,
      date: '2019-10-10',
      tripType: 'Rockclimbing',
      user_id: 2
    },
    {
      title: 'Climbing Small Rocks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 1,
      image: '',
      duration: 5,
      distance: 40,
      date: '2018-12-22',
      tripType: 'Rockclimbing',
      user_id: 2
    },
    {
      title: 'Climbing Rocks Blindfolded',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Aliquet risus feugiat in ante metus. Massa ultricies mi quis hendrerit dolor. Aenean sed adipiscing diam donec adipiscing tristique risus nec. A scelerisque purus semper eget duis at. Ullamcorper a lacus vestibulum sed arcu non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      isPrivate: 0,
      isProfessional: 1,
      image: '',
      duration: 1,
      distance: 20,
      date: '2019-07-04',
      tripType: 'Rockclimbing',
      user_id: 2
    }
  ]);
};
