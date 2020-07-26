/**
 * @fileoverview disallow assign to this.data / 不允许给 this.data 直接赋值
 * @author yikazhu
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",
    messages: {
      noAssignThisData: "请不要使用 this.data.{{variable}} 赋值，只允许使用 this.setData({ {{variable}}: {{value}}  })"
    }
  },
  create: function (context) {
    return {
      // callback functions
      AssignmentExpression(node) {
        if (
          node.left
          && node.left.type === 'MemberExpression'
          && node.left.object
          && node.left.object.type === 'MemberExpression'
          && node.left.object.object
          && node.left.object.object.type === 'ThisExpression'
          && node.left.object.property
          && node.left.object.property.type === 'Identifier'
          && node.left.object.property.name === 'data'
        ) {
          context.report({
            messageId: 'noAssignThisData',
            loc: node.left.loc,
            data: {
              variable: node.left.property.name,
              value: node.right.value
            }
          })
        }

      }
    };
  }
};