document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('eventsContainer');

    // Fetch events data from the API
    fetch('https://clubandevent.onrender.com/api/v1/event')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                const events = data.data.filter(event => !event.permission);
                events.forEach(event => {
                    const eventDiv = document.createElement('div');
                    eventDiv.classList.add('event');
                
                    const eventName = document.createElement('span');
                    eventName.classList.add('event-name');
                    eventName.textContent = event.name;
                    eventDiv.appendChild(eventName);
                
                    const acceptButton = document.createElement('button');
                    acceptButton.classList.add('acceptBtn');
                    acceptButton.setAttribute('data-event-id', event.id);
                    acceptButton.textContent = 'Accept';
                    eventDiv.appendChild(acceptButton);
                    eventsContainer.appendChild(eventDiv);
                });
                
                
            } else {
                console.error(data.message);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Handle button click event
    eventsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('acceptBtn')) {
            const eventId = event.target.getAttribute('data-event-id');
            // Fetch existing event data
            fetch(`https://clubandevent.onrender.com/api/v1/event/${eventId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(eventData => {
                    // Merge existing data with updated permission
                    const updatedEventData = {
                        ...eventData,
                        permission: true
                    };
                    // Send PATCH request with merged data
                    fetch(`https://clubandevent.onrender.com/api/v1/event/${eventId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedEventData)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        // Optionally, you can remove the event from the UI
                        event.target.parentNode.remove();
                        console.log(`Event ID ${eventId} permission updated to true`);
                    })
                    .catch(error => {
                        console.error('There was a problem with the PATCH request:', error);
                    });
                })
                .catch(error => {
                    console.error('There was a problem with fetching event data:', error);
                });
        }
    });
});
