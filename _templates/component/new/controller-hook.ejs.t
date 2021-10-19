---
to: src/presentation/component/<%= module %>/<%= Name %>/use<%= Name %>Controller.ts
---
<%
controllerName = "use" + Name + "Controller"
%>

export const <%= controllerName %> = () => {
    return {
     // here comes api which will component use
    };
}


