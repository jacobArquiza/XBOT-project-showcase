const content = document.querySelector('.content')
const shortHand = {
  "Mechanical":"MECH.",
  "Programming":"PROGRM.",
  "Electrical":"ELECTR."
}
const projects = [
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
    {
      projectName: "Path planning",
      
      projectID: 'path-planning',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: ``,
          ourSolution: ``,
          ourSolutionsImpact: ``,
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
          <img class="project-content-image" src="../styles/static/waypoints.png"/>
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
          <img class="project-content-image" src="../styles/static/bezier1.png"/>
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
          <img class="project-content-image" src="../styles/static/bezierSpline.png"/>
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
          <img class="project-content-image" src="../styles/static/timemap_transparent.png"/>
        </div>
        `,
      }
    },
    {
      projectName: "Auto Labeler",
      
      projectID: 'auto-labeler',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: ``,
          ourSolution: ``,
          ourSolutionsImpact: ``,
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
    {
      projectName: "XDash",
      
      projectID: 'xDash',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: ``,
          ourSolution: ``,
          ourSolutionsImpact: ``,
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
    {
      projectName: "XTables",
      
      projectID: 'xTables',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: ``,
          ourSolution: ``,
          ourSolutionsImpact: ``,
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
    {
      projectName: "Reef Tracker",
      
      projectID: 'reef-tracker',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: ``,
          ourSolution: ``,
          ourSolutionsImpact: ``,
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
    {
      projectName: "Creeper",
      
      projectID: 'creeper',

      discipline: 'Vision',

      projectOverview: {
          ourProblem: ``,
          ourSolution: ``,
          ourSolutionsImpact: ``,
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
          img.src = '../styles/static/2500px-wave-graphic.png'; // Desktop image
      } 
      else if (window.innerWidth >= 2000) {
          img.src = '../styles/static/2000px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 1600) {
          img.src = '../styles/static/1600px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 1023) {
          img.src = '../styles/static/1023px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 768) {
          img.src = '../styles/static/768px-wave-graphic.png'; // Tablet image
      } 
      else if (window.innerWidth >= 553) {
          img.src = '../styles/static/553px-wave-graphic.png'; // Tablet image
      } 
      else{
          img.src = '../styles/static/wave-graphic.png'; // Tablet image
      } 
  }

  updateImage(); // Set initially
  window.addEventListener('resize', updateImage); // Update on resize
};

setDefaultPageLayout();
