<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Simple Concept Of Gravity</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #222;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>
    <script>
      var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies;

      var engine = Engine.create();

      engine.world.gravity.scale = 0;

      var render = Matter.Render.create({
        canvas: document.getElementById("canvas"),
        engine: engine,
        options: {
          width: window.innerWidth,
          height: window.innerHeight,
          wireframes: false,
          background: "#222",
        },
      });

      for (var i = 0; i < 500; i++) {
        var obj = Bodies.circle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
          0.7
        );
        obj.render.fillStyle = "#fff";
        World.add(engine.world, [obj]);
      }

      // Gravity Magic Happens Here :D
      Matter.Events.on(engine, "beforeUpdate", function () {
        var bodies = Matter.Composite.allBodies(engine.world);
        for (var i = 0; i < bodies.length; i++) {
          if (bodies[i].position.x < -10) {
            Matter.Body.setPosition(bodies[i], { x: render.canvas.width + 10, y: bodies[i].position.y });
          }
          else if (bodies[i].position.x > render.canvas.width + 10) {
            Matter.Body.setPosition(bodies[i], { x: -10, y: bodies[i].position.y });
          }
          if (bodies[i].position.y < -10) {
            Matter.Body.setPosition(bodies[i], { y: render.canvas.height + 10, x: bodies[i].position.x });
          }
          else if (bodies[i].position.y > render.canvas.height + 10) {
            Matter.Body.setPosition(bodies[i], { y: -10, x: bodies[i].position.x });
          }
          for (var j = i + 1; j < bodies.length; j++) {
            var bodyA = bodies[i],
              bodyB = bodies[j];
            var distance = Matter.Vector.magnitude(
              Matter.Vector.sub(bodyB.position, bodyA.position)
            );
            var direction = Matter.Vector.sub(bodyB.position, bodyA.position);
            var forceMagnitude = bodyA.mass * bodyB.mass / distance ** 1.9;
            var force = Matter.Vector.mult(
              Matter.Vector.normalise(direction),
              forceMagnitude
            );
            Matter.Body.applyForce(bodyA, bodyA.position, force);
            Matter.Body.applyForce(bodyB, bodyB.position, Matter.Vector.neg(force));
          }
        }
      });

      engine.timing.timeScale = 1;
      engine.timing.delta = 1 / 60;

      Matter.Engine.run(engine);

      Matter.Render.run(render);
    </script>
  </body>
</html>
