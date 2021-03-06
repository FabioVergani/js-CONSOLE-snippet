let urls = [
      'https://api.github.com/users/iliakan',
      'https://api.github.com/users/remy',
      'http://no-such-url'
    ];

    Promise.all(
        urls.map(url => fetch(url).catch(err => err))
      )
      .then(responses => {
        alert(responses[0].status); // 200
        alert(responses[1].status); // 200
        alert(responses[2]); // TypeError: failed to fetch (text may vary)
      });
