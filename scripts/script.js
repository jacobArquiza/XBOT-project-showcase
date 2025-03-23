const content = document.querySelector('.content')
const shortHand = {
  "Mechanical":"MECH.",
  "Programming":"PROGRM.",
  "Electrical":"ELECTR."
}
const projects = [
  //Probability Map
    {
      projectName: "Probability Map",
      
      projectID: 'probability-map',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `
            <h3 class="project-content-item-title">Our Problem</h3>
          <p class="project-content-item-paragraph">
          In the chaotic environments of FRC competitions, it’s hard to
          accurately measure where things are on the field. There’s
          uncertainty in the data we get from every camera and sensor.
        </p>`,
          ourSolution: `
            <h3 class="project-content-item-title">Our Solution</h3>
          <p class="project-content-item-paragraph">
            We take <strong>50 captures a second</strong> through each of our
            <strong>3 color cameras</strong> and detect robots and game pieces
            through an <strong>ML model</strong>. We assign a probability to
            detected objects based on our certainty of its location, and we
            determine this probability based on <strong>4 factors</strong>:
          </p>
          <ul class="project-content-item-list">
            <li>How far away the object is</li>
            <li>How long we detect the object</li>
            <li>How long it’s been since we’ve seen the object</li>
            <li>How the object has been moving</li>
          </ul>`,
          ourSolutionsImpact: `
            <h3 class="project-content-item-title">Our Solution's Impact</h3>
          <p class="project-content-item-paragraph">
            This elegant solution allows us to:
          </p>
          <ul class="project-content-item-list">
            <li>
              Accurately determines the position of any object our robot can
              see
            </li>
            <li>Gives our robot object permanence</li>
            <li>Reduces our waste of data</li>
            <li>Allows us to fuse multiple camera detections onto one map</li>
          </ul>
          <p class="project-content-item-paragraph">
            Our probability map opens the doors to more advanced vision
            systems that require a robust map of objects in space. Most
            importantly, it opens up the doors to our
            <a href="#path-planning">Path Planning System</a>, and<a href="#reef-tracker">
              Reef State Tracker</a
            >, integral parts of our gameplay.
          </p>`,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: `
            <h3 class="project-content-item-title">Capture</h3>
          <p class="project-content-item-paragraph">
              On the robot, we have 3 color cameras that continuously detect
              capture the field. These cameras run 50 detections a second
              each.
            </p>`,    
          onTheSurfaceDetect: `
            <h3 class="project-content-item-title">Detect</h3>
          <p class="project-content-item-paragraph">
              We run the captures through a Machine Learning model on an
              Orange Pi connected to the camera. We use our in-house,
              150,000-image-trained model to detect, Algae, Coral, Robots, and
              even the state of Reef Spaces [see <a href="#reef-tracker">Reef Tracker</a>].
              From these detections we get their distance from the camera it
              was taken from, and through math we can determine where that
              object is on a 3D map of the field.
            </p>
              <ul class="project-content-item-list">
              <li>How far away the object is</li>
              <li>How long we detect the object</li>
              <li>How long it’s been since we’ve seen the object</li>
              <li>How the object has been moving</li>
            </ul>`,    
          onTheSurfaceAssignProbability: `
            <h3 class="project-content-item-title">Assign Probability</h3>
          <p class="project-content-item-paragraph">
              We assign the probability of an object’s position based on 4
              factors:
            </p>
            <ul class="project-content-item-list">
              <li>How far away the object is</li>
              <li>How long we detect the object</li>
              <li>How long it’s been since we’ve seen the object</li>
              <li>How the object has been moving</li>
            </ul>
            <p class="project-content-item-paragraph">
              Every detected object has a unique probability graph assigned to
              it. Every time it is captured, the graph of its probability
              rises a small amount proportional to its distance from the the
              camera (Reasoning: We are more uncertain about far-away
              objects).
            </p>
            <p class="project-content-item-paragraph">
              Over time, as we don’t see the object, its probability naturally
              decays until we see it again. This allows our robot to
              “remember” where objects are and also “know” that it might not
              still be there.
            </p>`,
          onTheSurfaceMap: `
            <h3 class="project-content-item-title">Map</h3>
          <p class="project-content-item-paragraph">
              When we are uncertain (the graph of probability of an object is
              low) that an object is where we assume it to be, a cloud of
              where that object could be is plotted on the map. This is
              especially important when detecting robots. Because they move,
              their probability clouds stretch in front and slightly to the
              side of them, reflecting their tendency to drive forward but
              also move sideways. Objects and robots in this way allow us to
              later dodge them [see <a href="#path-planning">Path Planning</a>].
            </p>`,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: `
            <h3 class="project-content-item-title">Capture</h3>
            <p class="project-content-item-paragraph">
              On the robot, we have <strong>3 Arducam OV9782s</strong> that continuously detect capture the field at a rate of 20 ms per detection.
            </p>
          `,    
          inDepthDetect: ` 
            <h3 class="project-content-item-title">Assign Probability</h3>
            <p class="project-content-item-paragraph">
              We run the captures through a Machine Learning model on an Orange Pi connected to the camera. We use our in-house model, that was trained on a vast data set of images [see <a href="#auto-labeler">Auto Labeler</a>]. This data comes from a unique set of 30,000 images that have been augmented in different ways to imitate unideal field conditions, totaling 150,000 images. This model is trained to detect year-agnostic objects like Robots, and year-specific objects like Algae, Coral, and even the state of Reef Spaces [see <a href="#reef-tracker">Reef Tracker</a>]. 
            </p>
            <p class="project-content-item-paragraph">
              Because we understand the exact size (or general size, in the case of robots) of the objects we detect, by how large they appear in the camera we can derive their distance. Using our knowledge of the camera-intrinsic-properties, we can map those detections to a central point of probability on our 3D, probabilistic map of the field.
            </p>
          `,    
          inDepthAssignProbability: `
            <h3 class="project-content-item-title">Detect</h3>
            <p class="project-content-item-paragraph">
              We assign the probability of an object’s position based on <strong>4 factors</strong>:
            </p>
            <ul class="project-content-item-list">
              <li>How far away the object is</li>
              <li>How long we detect the object</li>
              <li>How long it’s been since we’ve seen the object</li>
              <li>How the object has been moving</li>
            </ul>
            <p class="project-content-item-paragraph">
              Every detected object has a unique Gaussian probability graph assigned to it. Every time it is detected through our Machine Learning mode, the probability that it exists at that location rises, and so the peak of the Gaussian rises and sharpens. The amount a Gaussian probability rises after a capture is proportional to the distance from the object to the camera, as we are more uncertain about far-away objects than close ones.
            </p>
            <p class="project-content-item-paragraph">
              When we are uncertain about an object’s location, its probability is low, and the “cloud” of probability around it on our map expands. The longer we see an object, the more this cloud tightens. If the probability is too low, we throw the detection away, allowing us to disregard false positives and old detections.
            </p>
            <p class="project-content-item-paragraph">
              Over time, as we don’t see the objects, its probability naturally decays. This decay is constant, so looking a way from an object for long enough will always bring its probability of existence to zero. This ties our probability of objects to time and removes the dependency on constantly seeing an object to know where it is. Through our system, we give our robot<strong> object permanence</strong>.
            </p>
            <p class="project-content-item-paragraph">
              Over time, as we don’t see the object, its probability naturally decays until we see it again. This allows our robot to “remember” where objects are and also “know” that it might not still be there.
            </p>
          `,
          inDepthMap: `
            <h3 class="project-content-item-title">Map</h3>
            <p class="project-content-item-paragraph">
              When we are uncertain (the graph of probability of an object is low) that an object is where we assume it to be, a cloud of where that object could be is plotted on the map. This is especially important when detecting robots. Through a robots probability on our map, we naturally generate a velocity vector that points in the likely direction of movement within the near future. Acknowledging that swerve-drive robots can easily move side to side, we push out the robots probable future location horizontally. This later allows us to dodge them accurately and automatically [see <a href="#path-planning">Path Planning</a>].
            </p>
          `,    
      },
      engineeringProcess: {
        problemIdentification: ``,
        projectIdeationAndPlanning: ``,
        projectTimeline: ``,
      }
    },
  //Path Planning
    {
      projectName: "Path planning",
      
      projectID: 'path-planning',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `
          <h3 class="project-content-item-title">Our Problem</h3>
          <p class="project-content-item-paragraph">
            With such an emphasis on fast cycles, the name of the game this year is efficiency and speed. If our cycles aren’t fast enough, we won’t be able to compete against this year’s best. On the software side of things, we can decrease our cycle time by making sure our movement is optimized.
          </p>
          `,
          ourSolution: `
          <h3 class="project-content-item-title">Our Solution</h3>
          <p class="project-content-item-paragraph">
            We created our own implementation of Path Planning, using Bezier Splines to balance the efficiency of Bezier curves with the local control of waypoints. We avoid or head towards areas outlined by our <a href="#probability-map">Probability Map</a> and create the most efficient and velocity-consistent path.
          </p>
          `,
          ourSolutionsImpact: `
          <h3 class="project-content-item-title">Our Solution's Impact</h3>
          <p class="project-content-item-paragraph">
            We are able to plan efficient and dynamic autos that resist external changes, obstacles, and interruptions to our path; reduce our teleop cycle time; and react to enemy defense faster than humanly possible. Our <a href="#path-planning">Path Planning</a> stands out compared to the competition because our implementation of it is so specific, robust, and specialized.
          </p>
          `,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: ``,    
          onTheSurfaceDetect: ``,    
          onTheSurfaceAssignProbability: ``,
          onTheSurfaceMap: ``,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: ``,    
          inDepthDetect: ``,    
          inDepthAssignProbability: ``,
          inDepthMap: ``,    
      },
      engineeringProcess: {
        problemIdentification: `
        <h3 class="project-content-item-title">Problem Identification</h3>
        <p class="project-content-item-paragraph">
          This season, we decided it was important to be able to go dynamically and intelligently from point A to point B, most crucially during auto. Going in a straight line won’t cut it; we need the ability to go from point A to point B without crashing into anything in between. We need to have the ability to intelligently plan a route around obstacles to get to our destination, without any human input, at speed.
        </p>  
          `,
        projectIdeationAndPlanning: `
        <h3 class="project-content-item-title">Project Ideation and Planning</h3>
        <p class="project-content-item-paragraph">
          To achieve this goal, the Vision team members on the task had to closely collaborate with other sub-teams, especially during the planning process. In meetings with students from other disciplines, we identified key subtasks to accomplish.
        </p>  
        <ul class="project-content-item-list">
          <li><strong>Establish a path</strong> from point A to point B, dodging obstacles</li>
          <li><strong>Ensure constant velocity</strong> by creating a path that allows us to move as fast as possible</li>
          <li><strong>Minimize latency</strong>, the amount of time it takes to plan a path</li>
        </ul>
        <p class="project-content-item-paragraph">
          To establish a path, our developers researched different pathfinding algorithms. To ensure constant velocity, our developer researched different physics theories and methods and how they applied to our use case and robotics in general. To minimize latency our developers planned a timeline and schedule with room for iteration.
        </p>
        `,
        projectTimeline: `
        <h3 class="project-content-item-title">Project Timeline</h3>
        <p class="project-content-item-paragraph">
          <strong>Path-planning iteration I</strong>
        </p>  
        <p class="project-content-item-paragraph">
          The first iteration of Path-Planning was a simple waypoint system that allowed the robot to plan a path to travel from points A and B, with n points in between. To do this, our developers tackled the problem by using an A* (A-star) search algorithm to generate the closest path using the localized field elements. 
        </p>  
        <p class="project-content-item-paragraph">
          This approach led to a very large number of points to travel to that were not smooth. Because of this, we were not able to traverse the path quickly. Sharp turns and jittery movement made for a loss of speed that wasn’t only attributable to the unpolished nature of the code, but the approach itself. Knowing this, the developers identified key weaknesses in the current approach before moving on. 
        </p>  
        <ul class="project-content-item-list">
          <li><strong>The A* algorithm is heuristical</strong>. This means that it’s essentially “guessing” to find the closest path, but doesn’t guarantee While it’s not detrimental, this kind of uncertainty must be addressed later in the iterations of the project</li>
          <li><strong>The calculated path is not smooth</strong>. The path derived from this approach has sharp turns, mini stops, and jittery behavior. These factors combined lead to a loss of speed. To ensure that the velocity of the robot is as high as possible, we needed to create a path that the robot could go full speed on: a curvy one</li>
        </ul>
        <p class="project-content-image-subtitle">
          Iteration I using waypoints and A*
        </p>  
        <div class="project-content-image-div">
          <img class="project-content-image" src="./styles/static/waypoints.png"/>
        </div>
        <p class="project-content-item-paragraph">
          <strong>Path Planning Iteration II</strong>
        </p>  
        <p class="project-content-item-paragraph">
          To work towards solving the issues presented by the first iteration, the developers decided to implement Bézier Curves. This allowed the robot to travel on a smooth curve towards the goal when given points to anchor to. 
        </p>  
        <p class="project-content-item-paragraph">
          Unfortunately, this approach had its own problems. 
        </p>  
        <ul class="project-content-item-list">
          <li><strong>Discontinuous velocity</strong>. While the curve was smooth, decreasing losses of speed, it still had areas where the speed had to “jump”. Rapid acceleration is bad on the hardware and inefficient. </li>
          <li><strong>Local control</strong>. To increase smoothness, you add more control points. The problem is that with more control points, any modifications to one section’s control points will effect the entire curve. The smoother you make a curve, the more you lose control of its shape.</li>
        </ul>
        <p class="project-content-image-subtitle">
          Iteration II using control points and a Bézier Curve
        </p>  
         <div class="project-content-image-div">
          <img class="project-content-image" src="./styles/static/bezier1.png"/>
        </div>
        <p class="project-content-item-paragraph">
          <strong>Path-Planning Iteration III</strong>
        </p>  
        <p class="project-content-item-paragraph">
          To address the problem of local control, the developers used multiple curves independent of one another. These curves were connected together in what is called a Bézier Spline. This allowed us to manipulate each curve independently through its local control points. This also allowed us to create a smooth curve (many control points) that could avoid obstacles (separate sections).
        </p>  
        <p class="project-content-item-paragraph">
          Alongside these improvements came unwelcome drawbacks. The third iteration of Path-Planning took too long to run, costing 2-3 seconds to plan a single path. Our persistent use of the A* algorithm was the cause, and the developers made a plan to address it.
        </p>  
        <p class="project-content-image-subtitle">
          Iteration III using  a Bézier Curve Spline
        </p>  
        <div class="project-content-image-div">
          <img class="project-content-image" src="./styles/static/bezierSpline.png"/>
        </div>
        <p class="project-content-item-paragraph">
          <strong>Path-Planning Iteration IV</strong>
        </p>  
        <p class="project-content-item-paragraph">
         To solve the latency issue, our developers switched from the slow, heuristical A* algorithm to a time mask. The time mask shows the possible routes and the amount of time it would take to traverse them. It uses the path with the shortest time, which gives us the guaranteed correct path that A* does not. The time of devising a suboptimal path is cut from 2-3 seconds to 50 milliseconds when calculating an optimal one. 
        </p>  
        <p class="project-content-image-subtitle">
          Iteration IV using a time map instead of A*
        </p>  
         <div class="project-content-image-div">
          <img class="project-content-image" src="./styles/static/timemap_transparent.png"/>
        </div>
        `,
      }
    },
  //Auto-Labeler
    {
      projectName: "Auto Labeler",
      
      projectID: 'auto-labeler',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `<h3 class="project-content-item-title">Our Problem</h3>
            <p class="project-content-item-paragraph">
              We need large datasets to train the machine learning models we use
              in our ML-based vision systems. <strong>Large datasets</strong>.
              This process is very laborious; in any set of images extracted
              from a video, there are only so many that are actually useful.
            </p>`,
          ourSolution: `<h3 class="project-content-item-title">Our Solution</h3>
            <p class="project-content-item-paragraph">
              Getting rid of this useless data is the core functionality of the
              <a href="#auto-labeler">Auto-Labler</a>. Through a four-stage process, we find
              the useful frames in videos <strong>through an AI Model</strong>,
              prevent overfitting our model with a pipeline that filters out
              non-unique images, dynamically protect our yield from
              underfitting, and extract the cleaned images.
            </p>`,
          ourSolutionsImpact: `<h3 class="project-content-item-title">Our Solution's Impact</h3>
            <p class="project-content-item-paragraph">
              The Auto-Labeler allows us to dramatically<strong>
                increase</strong
              >
              our labelers’ <strong>quality of life</strong>,
              <strong>data output</strong>, and
              <strong>model training speed</strong>. The resultant robust model
              is the prerequisite to our advanced
              <a href="#probability-map">Probabilistic Object Detection Map</a>,
              which lies at the heart of all our vision systems.
            </p>`,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: ``,    
          onTheSurfaceDetect: ``,    
          onTheSurfaceAssignProbability: ``,
          onTheSurfaceMap: ``,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: ``,    
          inDepthDetect: ``,    
          inDepthAssignProbability: ``,
          inDepthMap: ``,    
      },
      engineeringProcess: {
          problemIdentification: `<h3 class="project-content-item-title">Our Problem</h3>
            <p class="project-content-item-paragraph">
              Large datasets are needed to train the machine learning models for
              visual pose estimation, autonomous movement, and accurate
              high-speed data collection. These data sets can range from tens of
              thousands to millions of items. The labor-intensive process of
              creating these data sets requires many human labelers to go
              through large image sets by hand and put bounding boxes around
              objects of interest. However, over half of the retrieved images
              contain no useful data, making manual labeling inefficient. To
              lighten the load on our team, we needed to find a way to automate
              the process of removing low-quality or otherwise useless images
              from the image sets our labelers work on.
            </p>
            <div class="project-content-image-div">
              <img
                src="./styles/static/auto-labeler-time-saved.png"
                alt=""
                class="project-content-image"
              />
            </div>`,
          projectIdeationAndPlanning: `<h3 class="project-content-item-title">
              Project Ideation and Planning
            </h3>
            <p class="project-content-item-paragraph">
              The Auto-Labeler is a four-stage process that uses an AI model to
              filter out the useful frames in videos. The first stage of the
              Auto-Labeler is the AI model, which is trained to recognize the
              objects of interest in the images. The second stage is a pipeline
              that filters out non-unique images, preventing overfitting of the
              model. The third stage dynamically protects the yield from
              underfitting, ensuring that the model is robust. The final stage
              extracts the cleaned images, which are then used to train the
              machine learning models.The vision sub-team started off the season
              with a long meeting, discussing this season’s goals and discerning
              milestones to achieve them. There, our problem was identified and
              marked to be worked on. We established a goal to develop a tool to
              streamline our labelers’ workflows. The settled-on solution
              process started with an initial quality dataset, running an object
              detection model on that dataset, running QA tests on the results,
              putting the assured data in the model, and repeating this until we
              achieved model robustness. From QA testing, we remove up to 10-20%
              error from detections made by the model. We assigned a team of two
              students and a mentor to tackle this problem, and they worked out
              a solution and tentative project timeline. This team discussed
              prospective technologies they could use to solve the problem, and
              possible bottlenecks. Each team member was assigned one of three
              roles: Script Developer (SD), Middleware Developer (MID), and
              UI-UX Developer (UXD).
            </p>`,
          projectTimeline: `<h3 class="project-content-item-title">Project Timeline</h3>
            <p class="project-content-item-paragraph">
              After the planning process was complete, the SD approached the
              problem by identifying key challenges and objectives in four
              steps.
            </p>
            <ul class="project-content-item-list">
              <li>
                <strong>SLICE</strong>:
                <i>
                  How do we run a video through a model and create a list of
                  valid images our labelers can use?
                </i>
              </li>
              <li>
                <strong>SEGMENT</strong>:
                <i>
                  How do we ensure robust image collection and avoid yield
                  drawbacks due to false negatives?
                </i>
              </li>
              <li>
                <strong>EXTRACT</strong>:
                <i>
                  How do we retrieve the validated images into a format our
                  labelers can then work with?
                </i>
              </li>
              <li>
                <strong>CHECK</strong>:
                <i>How can we QA test the image data we received?</i>
              </li>
            </ul>
            <div class="project-content-image-div">
              <img
                src="./styles/static/auto-labeler-diagram.png"
                alt=""
                class="project-content-image"
              />
            </div>
            <p class="project-content-item-paragraph">
              Upon identifying the key goals, the SD created four different
              scripts to fulfill them. After the SD had the scripts functional,
              they were uploaded to the SD’s branch in the GitHub repository.
              Although the scripts were uploaded to the repository, they were
              continuously evaluated, improved on, and iterated on by the SD.
              When changes were complete, the SD would push their code to their
              branch and communicate with the MID and UXD about how those
              changes could affect their work.
            </p>
            <p class="project-content-item-paragraph">
              As in every project, bottlenecks are inevitable in the development
              process, and the SD had to solve them creatively.
            </p>
            <table>
              <tr>
                <th colspan="2">BOTTLENECK 1: FRAME SIMILARITY (SLICE)</th>
              </tr>
              <tr>
                <td>
                  After initially running the scripts, there were too many valid
                  images pulled from a video that it would be massively
                  inefficient and ineffective to label them all
                </td>
                <td>
                  The SD implemented a similarity system. This system would
                  quantify a found and validated image’s similarity to the
                  previously collected images. If an image was detected as too
                  similar to data that was already collected, it was discarded.
                  This improved the diversity of the images we fed to our model
                  and decreased the amount of work our labelers had to do.
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="project-content-image-div">
                    <img
                      src="./styles/static/auto-labeler-skip-unique-frames.png"
                      alt=""
                      class="project-content-table-image"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="2">
                  BOTTLENECK 2: SLIDING WINDOW PROBLEM (SEGMENT)
                </th>
              </tr>

              <tr>
                <td>
                  When multiple objects are being detected at once (ex. Coral,
                  Algae, and Robots) it can be hard for the machine to run the
                  script with one pass but costs too much time to run through
                  the data multiple times.
                </td>
                <td>
                  The SD implemented multiple “sliding windows” that run in
                  parallel through multiprocessing, avoiding performance issues
                  while saving the time necessary for the script to run. Each
                  sliding window would be in charge of one object type (Coral,
                  Algae, Robot, etc.) and run concurrently with its sister
                  windows.
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="project-content-image-div">
                    <img
                      src="./styles/static/auto-labeler-segment.png"
                      alt=""
                      class="project-content-image"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="2">BOTTLENECK 3: PERFORMANCE ISSUES (SEGMENT)</th>
              </tr>

              <tr>
                <td>
                  Defining a clear start and stop point for valid image
                  sequences is challenging, as human intuition often differs
                  from code logic.
                </td>
                <td>
                  The SD established three parameters, gap, buffer, and merge,
                  were added. This would allow the user to choose how big their
                  “sliding window” (where the range of data will start and stop)
                  will be. With the correct combination of parameter values, a
                  user can optimize the data they receive through the script,
                  and thus the yield of good data as a whole.
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="project-content-image-div">
                    <img
                      src="./styles/static/auto-labeler-bottleneck.png"
                      alt=""
                      class="project-content-image"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th colspan="2">
                  BOTTLENECK 4: MULTIPLE OCCURRENCES OF AN OBJECT (SEGMENT)
                </th>
              </tr>

              <tr>
                <td>
                  In one frame it’s quite possible, and common, for there to be
                  multiple occurrences of an object of interest (ex. 2 Notes, 3
                  Corals, etc.). This causes a hitch in the code where it may
                  not know how to process that data.
                </td>
                <td>
                  Instead of counting each object individually, the system flags
                  the frame as useful based on the presence of at least one
                  object of interest, reducing computational overhead and
                  unnecessary (for our use case) data collection.
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="project-content-image-div">
                    <img
                      src="./styles/static/auto-labeler-bottleneck-2.png"
                      alt=""
                      class="project-content-image"
                    />
                  </div>
                </td>
              </tr>
            </table>
            <p class="project-content-item-paragraph">
              The UXD designed the application on Figma. They created a user
              persona, filled out a Pains and Gains worksheet, and created a
              wireframe on Figma, which was later turned into a full design.
              They then exported a screenshot of the Figma design to an image
              editor and noted how different elements of the Figma design could
              be implemented with HTML elements. This process included marking
              out a grid, establishing groups of elements, and marking down
              unfamiliar element types for research.
            </p>
            <p class="project-content-image-subtitle">Figma Design</p>
            <div class="project-content-image-div">
              <img
                src="./styles/static/auto-labeler-figma-design.png"
                alt=""
                class="project-content-image"
              />
            </div>`,
      }
    },
  //XDash
    {
      projectName: "XDash",
      
      projectID: 'XDash',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `
          <h3 class="project-content-item-title">Our Problem</h3>
          <p class="project-content-item-paragraph">
            In the 2024 season, the Vision Subteam was full of lofty ideas but unable to deliver code fast enough or reliably. With multiple subteams passing around the robot, time was extremely valuable. Our development speed was critically capped by how fast we could physically push code.
          </p>
          `,
          ourSolution: `
          <h3 class="project-content-item-title">Our Solution</h3>
          <p class="project-content-item-paragraph">
            By centralizing our deployment interface and monitoring system, we can push code to all vision machines simultaneously in one click when it used to take hours. By creating a user-friendly user interface, <a href="#XDash">XDash</a> is more accessible to novice programmers.
          </p>`,
          ourSolutionsImpact: `
          <h3 class="project-content-item-title">Our Solution's Impact</h3>
          <p class="project-content-item-paragraph">
            <a href="#XDash">XDash</a> dramatically shifted our time allocation from deployment to actual testing. By entirely moving the time sink of deploying code, we can test and iterate on our systems at a speed magnitudes higher than in previous seasons. An added benefit of <a href="#XDash">XDash</a> is that it helps make quick and precise changes to the robot machines in the pit between matches and monitors all the robot diagnostics for faster problem identification.

          </p>`,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: ``,    
          onTheSurfaceDetect: ``,    
          onTheSurfaceAssignProbability: ``,
          onTheSurfaceMap: ``,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: ``,    
          inDepthDetect: ``,    
          inDepthAssignProbability: ``,
          inDepthMap: ``,    
      },
      engineeringProcess: {
          problemIdentification: `<h3 class="project-content-item-title">Our Problem</h3>
            <p class="project-content-item-paragraph">In the 2024 season, the Vision Subteam was full of ideas and lofty ambitions but wasn’t able to deliver code fast enough or reliably. At the end of the season, the team met and discussed reasons why this occurred, and one of the prominent ideas was that our workflow was incredibly hindered by our inability to deploy (and therefore test) our code changes. In the 2024 season,if the team wanted to push a single change, we would have to go into each of the six onboard vision machines and manually push changes. Time spent with the competition robot is a precious resource; the small amount of time was spent deploying code more than testing it. This massive hindrance made every step of the development process excruciatingly slow, and we needed to find a way to automate this process.

            </p>
            <p class="project-content-image-subtitle">Our time usage per time allotted with the robot in one session</p>
            <div class="project-content-image-div">
              <img src="./styles/static/xdash-time-alloted.png" alt="" class="project-content-image"/>
            </div>
            <p class="project-content-image-subtitle">Old Workflow vs New Workflow with <a href="#xDash">XDASH</a></p>
            <div class="project-content-image-div">
              <img src="./styles/static/xdash-time-saved.png" alt="" class="project-content-image"/>
            </div>`,
          projectIdeationAndPlanning: `
            <h3 class="project-content-item-title">Project Planning and Ideation</h3>
            <p class="project-content-item-paragraph">After our goal was established, a developer from our team assigned themself to the project. The developer preferred the Progressive Refinement workflow and accordingly worked towards getting a suboptimal but fully functional model working. The developer identified key aspects that were imperative to be implemented.
            </p>
            <ul class="project-content-item-list">
              <li>Minimize the length of time needed to push code to the machine.</li>
              <li>push code on all machines at once, decreasing the length of time needed by a factor of the number of machines used.</li>
              <li>a friendly design that can be used by both novice and experienced programmers.              </li>
            </ul>
            <p class="project-content-item-paragraph">The developer then approached the project as a big task, in contrast to the sequential, step-by-step process other developers are familiar with. 
            </p>`,
          projectTimeline: `
            <h3 class="project-content-item-title">Project Timeline</h3>
            <p class="project-content-item-paragraph"><strong>RESEARCH</strong>
              </p>
            <p class="project-content-item-paragraph">The developer did extensive research to find similar projects other programmers have done before, brainstorm ideas and possible avenues to approach specific problems and find inspiration for the friendly User Interface. The developer took heavy inspiration from a commercial device management system that managed servers and hundreds of computers at once, and using their flow as a tentative template, added and subtracted features to optimize it for the team’s specific use case.
              </p>
            <p class="project-content-image-subtitle">XDash inspiration (Webmin)
            </p>
            <div class="project-content-image-div"><img src="./styles/static/xdash-webmin.png" class="project-content-image" alt=""></div>
            <p class="project-content-item-paragraph"><strong>BUILD</strong>
            </p>
          <p class="project-content-item-paragraph">The developer built the application from the ground up, laying a base foundation and layout from which they could expand it at an exponential rate. The developer's philosophy was that building modular frameworks to use later in the development process was well worth the slog of the initial slow development process. The exponential growth in the speed of the building process was attributed to being able to use the custom templates to speed through most of the process of adding a new feature.
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/xdash-progressive-refinement.png" class="project-content-image" alt="">
            </div>
            <p class="project-content-item-paragraph">Although the intent was to build a quick and dirty model that would be tested and improved, the developer recognized that it was imperative to ensure that testing the model on the robot wouldn’t have any negative repercussions on or have any adverse interactions with the existing hardware and software or consume resources in any meaningful capacity. For this reason, the build process took up a relatively large amount of the time spent on the project.

            <p class="project-content-item-paragraph">The user interface was done with the goal of making it as friendly to its user as possible. To do this, the developer used many different libraries, namely Tailwind CSS and custom templates from previous projects to design it. The design included a button that worked in conjunction with backend scripts to update code on all the machines at once, turning hours of work into seconds.
            </p>
            <p class="project-content-item-paragraph"><strong>BUILD</strong>
            </p>
            <p class="project-content-item-paragraph">After the build process was complete, the developer moved on to the testing process. Because of the suboptimal (but safe) nature of the initial build, the model was slow and didn’t meet all of the requirements and goals of the project. The developer worked forwards from the systems created at the beginning of the build process and went back and forth making optimization changes to the system and testing the change’s effectiveness through testing. This second pass through the project was done in pursuit of piece-by-piece perfection, and when moving on from a revised process it was almost never returned to. As a result, after testing was complete it was shipped immediately.
            </p>`,
      }
    },
  //XTables
    {
      projectName: "XTables",
      
      projectID: 'XTables',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `
          <h3 class="project-content-item-title">Our Problem</h3>
          <p class="project-content-item-paragraph">
            In the 2024 season, we cranked up our usage of AI models for the various systems we were trying to implement. A major problem that came with this was the <i>insane</i> amount of data that was being produced, constantly crashing our robot and even disabling it on the field. The default FRC Network Tables which we had been using for cross-machine communication had a throughput of 10,000 updates/second, which was far too slow for our needs.
          </p>
          `,
          ourSolution: `
          <h3 class="project-content-item-title">Our Solution</h3>
          <p class="project-content-item-paragraph">
           Through iterations 1-3 of XTables, we optimized, rewrote, and reapproached FRC Network Tables techniques, and in iteration 4, we <strong>changed the language entirely</strong>.
          </p>`,
          ourSolutionsImpact: `
          <h3 class="project-content-item-title">Our Solution's Impact</h3>
          <p class="project-content-item-paragraph">
           By iterating over the original FRC Network Tables, we optimized it so much that it <strong>far</strong> exceeded our base throughput requirement. This allows us the resources to try new, innovative, and crazy things related to AI and computer vision in robotics that haven’t been done before. 
          </p>`,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: ``,    
          onTheSurfaceDetect: ``,    
          onTheSurfaceAssignProbability: ``,
          onTheSurfaceMap: ``,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: ``,    
          inDepthDetect: ``,    
          inDepthAssignProbability: ``,
          inDepthMap: ``,    
      },
      engineeringProcess: {
          problemIdentification: `<h3 class="project-content-item-title">Our Problem</h3>
            <p class="project-content-item-paragraph">
              In the 2024 season, the Vision team cranked up their usage of AI models for various things. A major problem with this spike in AI usage is that there was an insane amount of data that was being produced, constantly crashing our robot and even disabling it on the field. After the season, we took the time to scour our systems with a profiler, and it showed us immediately, on the top of the list, that the FRC Network Tables we’d relied on were the cause. The default FRC Network Tables, the Tables used by every team, output only 10,000 updates a second while we required an output of at least 200,000 updates a second. This was a major issue; without proper handling of large amounts of data, the idea of automating on-field tasks is nothing but a pipe dream. We needed a new version of Network Tables, one that could handle anything we threw at it.
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/frc-vs-req.png" alt="" class="project-content-image"/>
            </div>
            `,
          projectIdeationAndPlanning: `<h3 class="project-content-item-title">Project Planning and Ideation</h3>
            <p class="project-content-item-paragraph">
              The developer who scoured the code showed immense interest in improving it, so they were assigned to the project. The developer dissected the FRC Network Tables, figuring out how it approached the task and discerning where it became sluggish—where they could improve it.  
            </p>`,
          projectTimeline: `<h3 class="project-content-item-title">Project Timeline</h3>
            <div class="project-content-image-div">
              <img src="./styles/static/xtables-full-table.png" alt="" class="project-content-image"/>
            </div>
            <p class="project-content-item-paragraph">
              <strong>XTables Iteration I</strong>
            </p>
            <p class="project-content-item-paragraph">
              After doing so the developer built the first working iteration of <strong>XTables</strong>, which had outputted <strong>100,000 updates a second, 10 times more than FRC’s version</strong> but still half of what was needed. The developer created this first iteration as a result of the scrutiny at which they looked at the FRC Network Tables. They wrapped around the same techniques used by FRC but improved on, restructured, or rebuilt them to make them faster and more efficient. 
            </p>
            <p class="project-content-image-subtitle">
              <a href="#XTables">XTables</a> V1 comparison chart
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/frc-vs-it1.png" alt="" class="project-content-image"/>
            </div> 
            <p class="project-content-item-paragraph">
              <strong>XTables Iteration II</strong>
            </p>
            <p class="project-content-item-paragraph">
              Repeating the process done in iteration one to improve on the FRC Network Tables, the developer optimized the wrapped techniques to further improve its efficiency. The resulting second iteration pushed <strong>200,000 updates a second, 20 times more than FRC’s version</strong>, from these optimizations, achieving the goal and supporting what we were currently throwing at it. At this point, the developer had to make a decision: <i>was further optimization necessary if we already reached our goal? Is it sustainable to stop here, or should I continue spending time on this in case we need even more support in the next season? </i>
            </p>
            <p class="project-content-image-subtitle">
              <a href="#XTables">XTables</a> V2 comparison chart
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/it1-vs-it2.png" alt="" class="project-content-image"/>
            </div> 

            <p class="project-content-item-paragraph">
              <strong>XTables Iteration III</strong>
            </p>
            <p class="project-content-item-paragraph">
              The developer made the wise decision to keep iterating over the project, this time using a profiler to examine the path of information, and was able to see where the speed dipped. The developer hyper-focused in these areas and evened out the program until the information traveled at a near-constant speed throughout. From these changes, the developer was able to achieve <strong>400,000 updates a second, 40 times more than FRC’s version</strong>, and enough to be more than proud of. However, despite the achievement, the developer still believed they could make a drastic change and achieve drastic results given one more iteration.
            </p>
            <p class="project-content-image-subtitle">
              <a href="#XTables">XTables</a> V3 comparison chart
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/it2-vs-it3.png" alt="" class="project-content-image"/>
            </div> 

            <p class="project-content-item-paragraph">
              <strong>XTables Iteration IV (Final)</strong>
            </p>
            <p class="project-content-item-paragraph">
              The developer realized that the third iteration’s code had eliminated every possible source of sluggishness; the problem wasn’t the code, it was the language. Every iteration had improved on the FRC’s original Network Tables, which were written in Java. Java being a high-level programming language had a lot of things done for the developer behind the scenes, and these uncontrollable behind-the-scenes actions had a now visible impact on performance. The developer rewrote the code in JNI, a Java native interface that used C, the fastest current language, behind the scenes. The developer began to research and found that Google used Protobufs, and figured they could rewrite the data transfer method in a similar fashion, barely changed since iteration one. It was rewritten in C and now used extremely byte-efficient optimization, squishing data into unreadable, but almost instantly transferred data. From the resulting revamp, <a href="#XTables">XTables</a> was able to produce astonishingly <strong>3,300,000 updates a second, over 300x more than FRC’s Network Tables.</strong>
            </p>
            <p class="project-content-image-subtitle">
              <a href="#XTables">XTables</a> V4 comparison chart
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/it3-vs-it4.png" alt="" class="project-content-image"/>
            </div> `,
      }
    },
  //Reef Tracker
    {
      projectName: "Reef Tracker",
      
      projectID: 'reef-tracker',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `
          <h3 class="project-content-item-title">Our Problem</h3>
          <p class="project-content-item-paragraph">
            At the beginning of the year, the team established multiple season goals to help automate various driver processes, one of them being <strong>Reef-related automation</strong>. During matches, it can be especially hard for the driver to see whether opposite-facing reef spaces are occupied. 
          </p>
          `,
          ourSolution: `
          <h3 class="project-content-item-title">Our Solution</h3>
          <p class="project-content-item-paragraph">
            With a color-based histogram approach, we are able to determine when a reef space is open or closed. We can create a probability (similar to but less robust than our <a href="#probability-map">Probalistic Field Map</a>) that a reef space is open.
          </p>
          `,
          ourSolutionsImpact: `
          <h3 class="project-content-item-title">Our Solution's Impact</h3>
          <p class="project-content-item-paragraph">
            With our Reef Tracker in place, we are able to use the reef state information to make a queue of the ideal reef scoring orders, reduce our cycle time, and handle decision-making faster than a human can.
          </p>
          `,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: ``,    
          onTheSurfaceDetect: ``,    
          onTheSurfaceAssignProbability: ``,
          onTheSurfaceMap: ``,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: ``,    
          inDepthDetect: ``,    
          inDepthAssignProbability: ``,
          inDepthMap: ``,    
      },
      engineeringProcess: {
          problemIdentification: `
            <h3 class="project-content-item-title">Our Problem</h3>
            <div class="project-content-image-div">
              <img src="./styles/static/reef-tracker-setup.png" alt="" class="project-content-image"/>
            </div>
            <p class="project-content-item-paragraph">
              At the beginning of the year, the team established multiple season goals to help automate various driver processes, one of them being Reef-related automation. During matches, it can be especially hard for the driver to see whether opposite-facing reef spaces are occupied. With a reef tracker in place, the driver can plan the course of the match with absolute certainty. 
            </p>
            <p class="project-content-item-paragraph">
              In such a fast-paced game, there will inevitably be multiple occasions when the desired reef space becomes occupied as the robot is heading towards it, requiring a quick change of course impacted by human reaction time. For these reasons, we decided it was imperative to develop a system that allowed us to automatically score on the reef, both in and out of cases where our driver might have trouble.
            </p>`,
          projectIdeationAndPlanning: `<h3 class="project-content-item-title">Project Planning and Ideation</h3>
            <p class="project-content-item-paragraph">
              To achieve our goals, the developer broke up the problem into subproblems to be completed in subsequent order:
            </p>
            <ul class="project-content-item-list">
              <li><strong>Architecture:</strong> <i>decide how the reef is interpreted by code</i></li>
              <li><strong>Mapping Absolute Position:</strong> <i>dynamically find the reef’s position in space</i></li>
              <li><strong>State Tracking:</strong> <i>know which reef positions are open</i> </li>
              <li><strong>Queueing:</strong> <i>know the optimal order to target reef spaces in</i></li>
            </ul>`,
          projectTimeline: `<h3 class="project-content-item-title">Project Timeline</h3>
            <p class="project-content-item-paragraph">
              <strong>Architecture</strong>
            </p>
            <p class="project-content-item-paragraph">
              Our developer first started by creating our own reef object through a reef class. To do this, the developer first planned the applicable data fields and methods through a UML diagram. The reef class included setter and getter methods, AprilTag and branch IDs, and branch states.
            </p>
            <p class="project-content-image-subtitle">
              The UML Diagram made by our developer to design the Reef Class
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/reef-tracker-uml.png" alt="" class="project-content-image"/>
            </div>
            <p class="project-content-item-paragraph">
              <strong>Mapping Absolute position</strong>
            </p>
            <p class="project-content-item-paragraph">
              To map absolute position, the developer began by using what they knew, the six April Tags on each side of the reef. Knowing there are six fixed-position reef branches with a known distance from the April Tags, we could discern the position of the reef branches if we knew the positions of the April Tags. 
            </p>
            <div class="project-content-image-div">
              <img src="./styles/static/reef-tracker-split.png" alt="" class="project-content-image"/>
            </div>
            <p class="project-content-item-paragraph">
              The developer came up with two main methods to figure out whether a reef branch was occupied.
            </div>
            
            <ol class="project-content-item-list">
              <li><strong>Use a machine learning model</strong> trained on coral and the reef to figure out whether corals exist on any branch.</li>
              <li><strong>Use color detection</strong> to discern between the purple reef and the white coral to see if a branch is occupied.</li>              
            </ol>
            <p class="project-content-item-paragraph">
              The developer opted for the second option for a number of reasons: running a machine-learning model is extremely GPU and CPU-heavy. The machines available to run it, Orange Pis or Orins, <i>could</i> handle the task but it was too slow and not worth it. Another issue with the approach is that coral detection is notoriously difficult as its white color and glare from its round shape make for a nightmare for visual detection.
            </p>
            <p class="project-content-item-paragraph">
              To move forward with the second option, the developer created a histogram that would calculate the number of purple pixels in an image and weigh them against a white, determining whether a branch was occupied or not. This fulfilled the same purpose as the ML model but without the demand on the GPU and CPU or image recognition struggles.
            </p>
            <p class="project-content-item-paragraph">
              <strong>Mapping Absolute position</strong>
            </p>
            <p class="project-content-item-paragraph">
              With an established reef class, a calculated absolute position, and a reliable reef state tracker, the developer tackled queueing to determine the order to approach alternative branches in the event of a change in course. The developer created a priority system to handle this and also displayed this priority to the driver to ensure understanding between robot logic and human reasoning. 
            </p>
            <p class="project-content-item-paragraph">
              With queueing implemented, every time the driver attempts to score the robot will score, whether it be on the initially desired branch or not, and with a reaction time in the tens of milliseconds. 
            </p>`,
      }
    },
  //Creeper
    {
      projectName: "Creeper",
      
      projectID: 'creeper',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: `
          <h3 class="project-content-item-title">Our Problem</h3>
          <p class="project-content-item-paragraph">
            When we get too close to the reef, the April Tag that we use to align our robot starts to become too big in our camera frame. To not lose alignment, we had to implement a way to creep up to the correct location, even if April Tag localization becomes inviable.
          </p>
          `,
          ourSolution: `
          <h3 class="project-content-item-title">Our Solution</h3>
          <p class="project-content-item-paragraph">
            Without detecting the full April Tag, we use its edges to align ourselves in the middle, guaranteeing that we don’t go off course.
          </p>
          `,
          ourSolutionsImpact: `
          <h3 class="project-content-item-title">Our Solution's Impact</h3>
          <p class="project-content-item-paragraph">
            We can use Creeper in conjunction with Path Planning to make efficient movements that don’t require us to extend our cycle times by relying solely on April Tag localization.
          </p>
          `,
      },

      surfaceTechnicalOverview: {
          onTheSurfaceCapture: ``,    
          onTheSurfaceDetect: ``,    
          onTheSurfaceAssignProbability: ``,
          onTheSurfaceMap: ``,    
      },
      inDepthTechnicalOverview : {
          inDepthCapture: ``,    
          inDepthDetect: ``,    
          inDepthAssignProbability: ``,
          inDepthMap: ``,    
      },
      engineeringProcess: {
          problemIdentification: ``,
          projectIdeationAndPlanning: ``,
          projectTimeline: ``,
      }
    },
]

content.innerHTML = ''

//Helper functions---------------------------------------------------------------------------------------

function getProjectByID(id){
  return projects.find(project => project.projectID === id);
}

function openProjectById(id){
  project = getProjectByID(id)
  projectTitle = document.querySelector(`#${id}`).querySelector('.project-title-inactive')
  console.log(projectTitle)
  displayProjectNav(projectTitle)
}

function findParentElementOfClass(buttonOrigin, Class){
  buttonOrigin = buttonOrigin.parentNode
  if(!buttonOrigin.classList.contains(Class)){
    return findParentElementOfClass(buttonOrigin, Class)
  }
  return buttonOrigin;
}

function displayItems(section){
  projectContent.style.height = 0
  projectContent.style.opacity = 0

  projectContent.style.height = getTempDivHeight(section);
  Object.keys(section).forEach(function(item){
    projectContent.innerHTML+= section[item];
  })
  projectContent.style.opacity = 1
}

function getTempDivHeight(section){
  hiddenProjectContent = document.querySelector('.hidden-project-content')
  console.log(hiddenProjectContent);
  hiddenProjectContent.classList.remove('hidden-project-content')

  Object.keys(section).forEach(function(item){
    hiddenProjectContent.innerHTML+= section[item];
  })

  height = hiddenProjectContent.clientHeight;

  hiddenProjectContent.innerHTML = ''

  hiddenProjectContent.classList.add('hidden-project-content')
  console.log(height)
  return (height + 'px');
}

function replaceClassesWith(element, oldClasses, newClasses){
  oldClasses.forEach(function(Class){
    if(element.classList.contains(Class)){
      element.classList.remove(Class)
    }
  });
  newClasses.forEach(function(Class){
    element.classList.add(Class)
  });
}

function ifContainsReplaceClassesWith(elements, oldClasses, newClasses){
  elements.forEach(function(element){
    oldClasses.forEach(function(Class){
      if(element.classList.contains(Class)){
        replaceClassesWith(element, [Class], [])
      }
    });
    newClasses.forEach(() => {
        replaceClassesWith(element, [], [newClasses])
    });
  });
}

//Button functions---------------------------------------------------------------------------------------


function displayProjectOverview(projectOverviewButton){
  //If the project isn't in focus, make it in focus and then continue
  if(projectOverviewButton.classList.contains('project-nav-inactive')){
    projectTitle = (findParentElementOfClass(projectOverviewButton, 'project-header').querySelector('.project-title-inactive'))
    displayProjectNav(projectTitle);
  }

  //If its already active, quit
  if(projectOverviewButton.classList.contains('project-nav-active')){
    return
  }

  projectDiv = findParentElementOfClass(projectOverviewButton, 'project')
  id = projectDiv.id
  project = getProjectByID(id)

  projectContent =  projectDiv.querySelector('.project-content')
  projectContent.innerHTML = ''

  engineeringProcessButton = projectOverviewButton.parentNode.querySelector('.engineering-process-btn')
  technicalOverviewButton= projectOverviewButton.parentNode.querySelector('.technical-overview-btn')

  technicalOverviewWrapper = projectOverviewButton.parentNode.querySelector('.technical-overview-wrapper')
  
  onTheSurface = technicalOverviewWrapper.querySelector('.on-the-surface, .on-the-surface-inactive, .on-the-surface-active')
  inDepth = technicalOverviewWrapper.querySelector('.in-depth, .in-depth-inactive, .in-depth-active')

  technicalButtons = [onTheSurface, inDepth]


  //Make projectOverviewButton appear active
  if(!projectOverviewButton.classList.contains('project-nav-active')){
    replaceClassesWith(projectOverviewButton, ['project-nav'], ['project-nav-active'])
  }
  
  //Disable active styling on engineeringProcessButton and technicalOverviewButton
  ifContainsReplaceClassesWith([engineeringProcessButton, technicalOverviewButton], ['project-nav-active'], ['project-nav'])
  
  
  //Disable active styling on subnavs
  technicalButtons.forEach(function(button){    
    if(button.classList.contains('on-the-surface-active')){
      replaceClassesWith(button, ['on-the-surface-active'], ['on-the-surface'])    
    }
    if(button.classList.contains('in-depth-active')){
      replaceClassesWith(button, ['in-depth-active'], ['in-depth'])    
    }
  });

  displayItems(project.projectOverview);
}

function displayTechnicalOverview(technicalOverviewButton, type){
  //If the project isn't in focus, make it in focus and then continue
  if(technicalOverviewButton.classList.contains('project-nav-inactive')){
    projectTitle = (findParentElementOfClass(technicalOverviewButton, 'project-header').querySelector('.project-title-inactive'))
    displayProjectNav(projectTitle);
  }

  //If its already active, quit
  if(technicalOverviewButton.classList.contains('project-nav-active')){
    return
  }

  projectDiv = findParentElementOfClass(technicalOverviewButton, 'project')
  id = projectDiv.id
  project = getProjectByID(id)

  projectContent =  projectDiv.querySelector('.project-content')
  projectContent.innerHTML = ''
  
  projectOverviewButton = technicalOverviewButton.parentNode.parentNode.querySelector('.project-overview-btn')
  engineeringProcessButton = technicalOverviewButton.parentNode.parentNode.querySelector('.engineering-process-btn')
  
  onTheSurface = technicalOverviewButton.parentNode.querySelector('.on-the-surface')
  inDepth = technicalOverviewButton.parentNode.querySelector('.in-depth')

  //If technicalOverviewButton isn't active, make it active
  if(!technicalOverviewButton.classList.contains('project-nav-active')){
    replaceClassesWith(technicalOverviewButton, ['project-nav'], ['project-nav-active'])
  }

  //Revert engineeringProcessButton and projectOverviewButton 
  ifContainsReplaceClassesWith([engineeringProcessButton, projectOverviewButton], ['project-nav-active'], ['project-nav'])

  //If one of the subnavs are inactive
    //If activating onTheSurface, revert inDepth and activate onTheSurface
    //Else if activating inDepth, revert onTheSurface and activate inDepth
  if(!onTheSurface.classList.contains('on-the-surface-active') || !inDepth.classList.contains('in-depth-active')){
    if(type == 'onTheSurface'){
      ifContainsReplaceClassesWith([inDepth], ['in-depth-active'], ['in-depth'])
      replaceClassesWith(onTheSurface, ['on-the-surface'], ['on-the-surface-active'])
    }
    else if(type == 'inDepth'){
      ifContainsReplaceClassesWith([onTheSurface], ['on-the-surface-active'], ['on-the-surface'])
      replaceClassesWith(inDepth, ['in-depth'], ['in-depth-active'])
    }
  }
  displayItems(project.surfaceTechnicalOverview)
}

function displayTechnicalOverviewFromSubnav(subnavButton, type){
  //If the project isn't in focus, then quit
  if(subnavButton.classList.contains('on-the-surface-inactive') || subnavButton.classList.contains('in-depth-inactive')){
    return
  }


  //If its already active, quit
  switch(type){
    case 'onTheSurface':{
      if(subnavButton.classList.contains('on-the-surface-active')){
        return
      }
      break;
    }
    case 'inDepth':{
      if(subnavButton.classList.contains('in-depth-active')){
        return
      }
      break;
    }
  }

  projectDiv = findParentElementOfClass(subnavButton, 'project')
  id = projectDiv.id
  project = getProjectByID(id)

  projectContent =  projectDiv.querySelector('.project-content')
  projectContent.innerHTML = ''
  
  projectOverviewButton = subnavButton.parentNode.parentNode.parentNode.querySelector('.project-overview-btn')
  engineeringProcessButton = subnavButton.parentNode.parentNode.parentNode.querySelector('.engineering-process-btn')
  technicalOverviewButton = subnavButton.parentNode.parentNode.querySelector('.technical-overview-btn')

  onTheSurface = subnavButton.parentNode.querySelector('.on-the-surface, .on-the-surface-active, .on-the-surface-inactive')
  inDepth = subnavButton.parentNode.querySelector('.in-depth, .in-depth-active, .in-depth-inactive')


  //If technicalOverviewButton is inactive make it active
  if(!technicalOverviewButton.classList.contains('project-nav-active')){
    replaceClassesWith(technicalOverviewButton, ['project-nav'], ['project-nav-active'])
  }
  
  //If engineeringProcessButton and projectOverviewButton are active, then revert them
  ifContainsReplaceClassesWith([engineeringProcessButton, projectOverviewButton], ['project-nav-active'], ['project-nav'])

  //If either onTheSurface and inDepth are active
    //If you're activating onTheSurface, revert inDepth and activate onTheSurface
    //Else if you're activating inDepth, revert onTheSurface and activate inDepth
    
  if(!onTheSurface.classList.contains('on-the-surface-active') || !inDepth.classList.contains('in-depth-active')){
    if(type == 'onTheSurface'){
      if(inDepth.classList.contains('in-depth-active')){
        replaceClassesWith(inDepth, ['in-depth-active'], ['in-depth'])
      }
      onTheSurface.classList.add('on-the-surface-active')
      displayItems(project.surfaceTechnicalOverview)
    }
    else if(type == 'inDepth'){
      if(onTheSurface.classList.contains('on-the-surface-active')){
        replaceClassesWith(onTheSurface, ['on-the-surface-active'], ['on-the-surface'])
      }
      inDepth.classList.add('in-depth-active')
      getTempDivHeight(project.inDepthTechnicalOverview)
      displayItems(project.inDepthTechnicalOverview)
    }
  }
}

function displayEngineeringProcess(engineeringProcessButton){
  //If the engineeringProcessButton is inactive, activate everything and then move on
  if(engineeringProcessButton.classList.contains('project-nav-inactive')){
    projectTitle = (findParentElementOfClass(engineeringProcessButton, 'project-header').querySelector('.project-title-inactive'))
    displayProjectNav(projectTitle);
  }

  projectDiv = findParentElementOfClass(engineeringProcessButton, 'project')
  id = projectDiv.id
  project = getProjectByID(id)

  projectContent =  projectDiv.querySelector('.project-content')
  projectContent.innerHTML = ''
  
  projectOverviewButton = engineeringProcessButton.parentNode.querySelector('.project-overview-btn')
  technicalOverviewButton = engineeringProcessButton.parentNode.querySelector('.technical-overview-btn')

  technicalOverviewWrapper = projectOverviewButton.parentNode.querySelector('.technical-overview-wrapper')
  
  onTheSurface = technicalOverviewWrapper.querySelector('.on-the-surface, .on-the-surface-active, .on-the-surface-inactve')
  inDepth = technicalOverviewWrapper.querySelector('.in-depth, .in-depth-active, .in-depth-inactve')

  technicalButtons = [onTheSurface, inDepth]

  //If engineeringProcessButton is not active, activate it
  if(!engineeringProcessButton.classList.contains('project-nav-active')){
    replaceClassesWith(engineeringProcessButton, ['project-nav'], ['project-nav-active'])
  }

  //If projectOverviewButton or technicalOverviewButton are active, rever them
  ifContainsReplaceClassesWith([projectOverviewButton, technicalOverviewButton], ['project-nav-active'], ['project-nav'])

  //Deactivate the subanvs
  technicalButtons.forEach(function(button){
    if(button.classList.contains('on-the-surface-active')){
      button.classList.remove('on-the-surface-active')
    }
    if(button.classList.contains('in-depth-active')){
      button.classList.remove('in-depth-active')
    }
  });
  displayItems(project.engineeringProcess)
}

function displayProjectNav(title){
  projectHeader = findParentElementOfClass(title, 'project-header')
  navbar = projectHeader.querySelector('.project-navbar')
  navs = navbar.querySelectorAll('button');
  
  technicalOverviewWrapper = navbar.querySelector('.technical-overview-wrapper')
  subNavs = technicalOverviewWrapper.querySelectorAll('.on-the-surface, .on-the-surface-inactive, .on-the-surface-active, p, .in-depth, .in-depth-inactive, .in-depth-active')


  //If the title is inactive
    //make the project active
  if(title.classList.contains('project-title-inactive')){
    replaceClassesWith(title, ['project-title-inactive'], ['project-title'])
    inactive = false
  }
  else{
    inactive = true
  }
  
  if(inactive){
    //INACTIVE

    project = findParentElementOfClass(title, 'project')
    projectContent = project.querySelector('.project-content')
    projectContent.style.opacity = 0
    projectContent.style.height = 0
    setTimeout(() => {
    projectContent.innerHTML = ''
      //If a project nav is not inactive, make it inactive
      replaceClassesWith(title, ['project-title'], ['project-title-inactive'])

      navs.forEach(function(nav){
        ifContainsReplaceClassesWith([nav], ['project-nav-active', 'project-nav'], ['project-nav-inactive'])
      })
    
      subNavs.forEach(function(subnav){
        if(subnav.classList.contains('on-the-surface') || subnav.classList.contains('on-the-surface-active')){
          ifContainsReplaceClassesWith([subnav], ['on-the-surface', 'on-the-surface-active'], ['on-the-surface-inactive'])
        }
        else if(subnav.classList.contains('in-depth') || subnav.classList.contains('in-depth-active')){
          ifContainsReplaceClassesWith([subnav], ['in-depth', 'in-depth-active'], ['in-depth-inactive'])
        }
        else if(subnav.classList[0] == null){
          subnav.classList.add('inactive');
        }
      })
    }, 500);
  }
  else{
    //ACTIVE
    project = findParentElementOfClass(title, 'project')

    navs.forEach(function(nav){
      if(nav.classList.contains('project-nav-inactive')){
        nav.classList.remove('project-nav-inactive')
        nav.classList.add('project-nav')
      }
    })
  
    subNavs.forEach(function(subnav){
      if(subnav.classList.contains('on-the-surface-inactive')){
        subnav.classList.remove('on-the-surface-inactive')
        subnav.classList.add('on-the-surface')
      }
      if(subnav.classList.contains('in-depth-inactive')){
        subnav.classList.remove('in-depth-inactive')
        subnav.classList.add('in-depth')
      }
      if(subnav.classList.contains('inactive')){
        subnav.classList.remove('inactive')
      }
      });
      displayProjectOverview(project.querySelector('.project-overview-btn'));
    }
}

function setDefaultPageLayout(){
    projects.forEach(function(project){
        discipline = project.discipline;
        content.innerHTML += `
        <section class="project" id='${project.projectID}'>
            <div class="project-header">
              <div class="project-title-div">
                <h2 class="project-title-inactive">${project.projectName.toUpperCase()}</h2>
                <div class="${project.discipline.toLowerCase()}-discipline-tag">
                ${discipline in shortHand ? shortHand[discipline] : discipline.toUpperCase()}
                </div>
              </div>
              <div class="project-navbar">
                <button class="project-nav-inactive project-overview-btn">PROJECT OVERVIEW</button>
                <button class="project-nav-inactive engineering-process-btn">ENGINEERING PROCESS</button>
                <div class="technical-overview-wrapper">
                  <button class="project-nav-inactive technical-overview-btn">TECHNICAL OVERVIEW</button>
                   <div class="technical-overview-subwrapper">
                    <button class="on-the-surface-inactive">ON THE SURFACE</button>
                    <p>|</p>
                    <button class="in-depth-inactive">IN DEPTH</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-content" id="${project.projectID}-content"><div/>
          </section>
        `
    });
     content.innerHTML += `
     <section class="project hidden-project">
            <div class="project-header">
              <div class="project-title-div">
                <h2 class="project-title-inactive">HIDDEN PROJECT</h2>
                <div class="vision-discipline-tag">
                  VISION
                </div>
              </div>
              <div class="project-navbar">
                <button class="project-nav-inactive project-overview-btn">PROJECT OVERVIEW</button>
                <button class="project-nav-inactive engineering-process-btn">ENGINEERING PROCESS</button>
                <div class="technical-overview-wrapper">
                  <button class="project-nav-inactive technical-overview-btn">TECHNICAL OVERVIEW</button>
                  <div class="technical-overview-subwrapper">
                    <button class="on-the-surface-inactive">ON THE SURFACE</button>
                    <p>|</p>
                    <button class="in-depth-inactive">IN DEPTH</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-content hidden-project-content"><div/>
          </section>
        `
    document.querySelectorAll('.project-content').forEach(function(projectContent){
      if(!projectContent.classList.contains('hidden-project-content')){
        projectContent.style.height = 0
        projectContent.style.opacity = 0  
      }
  });

    document.querySelectorAll('.project-overview-btn').forEach(function(button){
      button.addEventListener('click', function() {
          displayProjectOverview(this);
      });
  });
    document.querySelectorAll('.technical-overview-btn').forEach(function(button){
      button.addEventListener('click', function() {
          displayTechnicalOverview(this, 'onTheSurface');
      });
  });
    document.querySelectorAll('.engineering-process-btn').forEach(function(button){
      button.addEventListener('click', function() {
          displayEngineeringProcess(this);
      });
  });
    document.querySelectorAll('.on-the-surface-inactive').forEach(function(button){
      button.addEventListener('click', function() {
        displayTechnicalOverviewFromSubnav(this, 'onTheSurface');
      });
  });
    document.querySelectorAll('.in-depth-inactive').forEach(function(button){
      button.addEventListener('click', function() {
        displayTechnicalOverviewFromSubnav(this, 'inDepth');
      });
  });

    document.querySelectorAll('.project-title-inactive').forEach(button => {
      button.addEventListener('click', function() {
        displayProjectNav(this);
      });
  });
}

window.onload = function () {
  const img = document.getElementById('wave-graphic');

  function updateImage() {
      if (window.innerWidth >= 2500) {
          img.src = './styles/static/2500px-wave-graphic.png'; // Desktop image
      } 
      else if (window.innerWidth >= 2000) {
          img.src = './styles/static/2000px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 1600) {
          img.src = './styles/static/1600px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 1023) {
          img.src = './styles/static/1023px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 768) {
          img.src = './styles/static/768px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 553) {
          img.src = './styles/static/553px-wave-graphic.png'; // Tablet image
      } 
      else{
          img.src = './styles/static/wave-graphic.png'; // Tablet image
      } 
  }

  updateImage(); // Set initially
  window.addEventListener('resize', updateImage); // Update on resize
};

setDefaultPageLayout();
