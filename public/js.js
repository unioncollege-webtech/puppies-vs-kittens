var socket = io.connect();

socket.on('score', function (data) {
  //console.log('Updated scores!', data.puppy, " ", data.kitten);
  $('#puppyScore').text(data.puppy);
  $('#kittenScore').text(data.kitten);
});

$(document).ready(function() {
  $('#puppiesButton').click(function() {
    //console.log('clicked puppies');
    socket.emit('vote', { puppies: true,
                          kittens: false  });
  });

  $('#kittensButton').click(function() {
    //console.log('clicked kittens');
    socket.emit('vote', { puppies: false,
                          kittens: true  });
  });
});
