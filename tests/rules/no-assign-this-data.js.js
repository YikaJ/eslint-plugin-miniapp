const RuleTester = require("eslint").RuleTester;
const rule = require("../../lib/rules/no-assign-this-data");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } }); // You do have to tell eslint what js you're using

ruleTester.run("noAssignThisData", rule, {
  valid: ["this.setData({ a: 3 })"],
  invalid: [
    {
      code: `
        this.data.xcx = 3
      `,
      errors: [
        {
          messageId: "noAssignThisData"
        }
      ]
    }
  ]
});