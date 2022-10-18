export default function (
    /** @type {import('plop').NodePlopAPI} */
    plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [
            {
                type: "input",
                name: "component_name",
                message: "name your component"
            }
        ], // array of inquirer prompts
        actions: [
            {
                type: "add",
                path: "./src/stories/{{component_name}}.stories.tsx",
                templateFile: "templates/story.template.hbs"

            }
        ]  // array of actions
    });
    plop.setHelper((str) => {})
};