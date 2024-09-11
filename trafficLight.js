function* trafficLight() {
    while (true) {
        yield { color: 'green', duration: 5000 };
        yield { color: 'yellow', duration: 3000 };
        yield { color: 'red', duration: 2000 };
    }
}

const light = trafficLight();

function changeLight() {
    const state = light.next().value;
    console.log(state.color);
    setTimeout(changeLight, state.duration);
}

changeLight();
