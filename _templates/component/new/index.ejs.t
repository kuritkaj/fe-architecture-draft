---
to: src/presentation/component/<%= module %>/<%= Name %>/<%= Name %>.tsx
---
<%
propsInterfaceName = Name + "Props"
controllerName = "use" + Name + "Controller"
%>
import * as React from "react";
import { <%= controllerName %> } from "./<%= controllerName %>";

export interface <%= propsInterfaceName %> {

}

export const <%= Name %>: React.FC<<%= propsInterfaceName %>> = React.memo(({}: <%= propsInterfaceName %>) => {
    const { } = <%= controllerName %>();

    return <></>;
});


