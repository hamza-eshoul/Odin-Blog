const Article = require("./models/articleModel");

const populateDB = async () => {
  // Create articles
  await Promise.all([
    articleCreate(
      "Advice on the programming and problem solving attitude",
      "The attitude of a programmer when he solves problems is as important as the problem-solving process itself",
      "problemSolving",
      "This article is going to reference a great answer that a programmer gave to another fellow programmer on reddit regarding the right attitude to have when solving problems.* The answer goes as follows : 'As in countless similar posts: it is a 'you' problem. You have the wrong attitude. If something doesn't work the way you think it should, you have learnt something. You have learnt how not to do something.* This is equally important to knowing how to do something. You seem to be taking every programming problem personnally and this is the wrongest possible approach. Don't let these things get to you. Frustration is 100% personal thing. It is solely up to you if you let it get to you or not. Also, maybe employ a different approach to programming: plan before program - detail your project before you start programming' "
    ),
    articleCreate(
      "Deadlines cause un-needed stress and hinder performance, particularly in the learning process",
      "Learning is a process that is incredibly complex and unique to each individual causing comparisons and deadlines to actually  be deleterious to the learner.",
      "devLearning",
      "Throughout my programming journey in the Odin Project, I did hear a lot of noise around me in social media stemming from  developers comparing their journeys often in brutal and inconsistent ways. The answer given by a fellow developer in the Odin Project discord regarding this matter was illuminating.* Here is a summary of the answer : It may take you longer than others to grasp concepts, or it may take you less time. This doesn't mean you're smarter or dumber. This is a personal journey. Because everyone is different, and have different backgrounds, it's not worth comparing yourself to others taking a similar journey.* Be wary of giving out advice about timelines or sharing your timeline to others. You are not the same as them and you have NO idea who they are and what they are able to do. "
    ),
    articleCreate(
      "The Brilliant Snowball Analogy Presented by The Odin Project",
      "In its foundations section, The Odin Project presents a striking and brilliant analogy that captures what learning programing is about",
      "snowBall",
      "The odin project compares the learner to a snowball that acculumates knowledges throughout his journey. Here is the exact formulation that The Odin Project came up with:*	Try to not think of the Odin Project, or programming, as a class in school. It’s not material you learn all at once to take a test, and then pass or fail.* You can think of it as snowball. You, yourself, are a snowball. You’re rolling down a hill full of snow and the further you roll, the more snow will stick to you. Sure, snow will also fall off of you, and you’ll forget things often, but that’s just part of the process."
    ),
    articleCreate(
      "The Required Learning Assets For A Self-Taught Developer",
      "Self-taught developers need to have a specific set of qualities and assets that allow them to push through their journey",
      "Überdeveloper",
      "The Odin Project presented these assets upfront in the Foundations section of the source.*	Learning to code is incredibly rewarding but can also be difficult and frustrating.* The strongest assets you can have as a student are a desire to build, a problem-solving mind, and persistence in the face of setbacks."
    ),
    articleCreate(
      "Growth Mindset vs Fixed Mindset in Programming",
      "Mindset is an incredibly important and decisive factor for every developer and most partciluarly self-taught developers.",
      "developerMindset",
      "In its Motivation and mindset lesson, The Odin Project talks about the mindset learners need to have. This mindset should be a growth mindset instead of a fixed mindiset. The Odin Project distinguishes these two mindset as follows.*	Someone with the fixed mindset believes if they don’t get something on their first attempt, they never will. They believe that they simply aren’t smart enough to be able to do or understand some things.* However, there is a wide body of research showing that intelligence is not fixed but can instead be developed. Someone with the growth mindset believes they can get better at anything with effort and persistence. "
    ),
  ]);
};

// Create article
async function articleCreate(title, introduction, image, content) {
  const article = new Article({
    title,
    introduction,
    image,
    content,
  });

  article.save();
}

module.exports = populateDB;
