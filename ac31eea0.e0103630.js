(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{160:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return l})),s.d(t,"rightToc",(function(){return c})),s.d(t,"default",(function(){return u}));var a=s(1),n=s(9),r=(s(0),s(182)),o={id:"2_pre-requisite",title:"Pre-requisite",sidebar_label:"Pre-requisite"},l={id:"multi-casskop/2_pre-requisite",title:"Pre-requisite",description:"In order to have a working Multi-CassKop operator we need to have at least 2 k8s clusters: k8s-cluster-1 and k8s-cluster-2",source:"@site/docs/multi-casskop/2_pre-requisite.md",permalink:"/casskop/docs/multi-casskop/2_pre-requisite",editUrl:"https://erdrix.github.io/casskop/edit/master/website/docs/multi-casskop/2_pre-requisite.md",sidebar_label:"Pre-requisite",sidebar:"docs",previous:{title:"Overview",permalink:"/casskop/docs/multi-casskop/1_overview"},next:{title:"Quickstart",permalink:"/casskop/docs/multi-casskop/3_quickstart"}},c=[{value:"Bootstrap API access to k8s-cluster-2 from k8s-cluster-1",id:"bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1",children:[]},{value:"Install CassKop",id:"install-casskop",children:[]},{value:"Install External-DNS",id:"install-external-dns",children:[]},{value:"Install Multi-CassKop",id:"install-multi-casskop",children:[]}],i={rightToc:c};function u(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In order to have a working Multi-CassKop operator we need to have at least 2 k8s clusters: k8s-cluster-1 and k8s-cluster-2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"k8s >=v1.15 installed on each site, with kubectl configure to access both of thems"),Object(r.b)("li",{parentName:"ul"},"The pods of each site must be able to reach pods on other sites, this is outside of the scope of Multi-Casskop and can\nbe achieve by different solutions such as:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"in our on-premise cluster, we leverage ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.projectcalico.org/why-bgp/"}),"Calico")," routable IP pool in order to make this possible"),Object(r.b)("li",{parentName:"ul"},"this can also be done using mesh service such as istio"),Object(r.b)("li",{parentName:"ul"},"there may be other solutions as well"))),Object(r.b)("li",{parentName:"ul"},"having casskop installed (With its ConfigMap) in each namespace see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#install-casskop"}),"CassKop installation")),Object(r.b)("li",{parentName:"ul"},"having ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"External-DNS")," with RFC2136 installed in each namespace to\nmanage your DNS sub zone. see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#install-external-dns"}),"Install external dns")),Object(r.b)("li",{parentName:"ul"},"You need to create secrets from targeted k8s clusters in current. see",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1"}),"Bootstrap")),Object(r.b)("li",{parentName:"ul"},"You may need to create network policies for Multi-Casskop inter-site communications to k8s apis, if using so.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"/!\\ We have only tested t/.he configuration with Calico routable IP pool & external DNS with RFC2136 configuration.")),Object(r.b)("h2",{id:"bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1"},"Bootstrap API access to k8s-cluster-2 from k8s-cluster-1"),Object(r.b)("p",null,"Multi-Casskop will be deployed in k8s-cluster-1, change your kubectl context to point to this cluster."),Object(r.b)("p",null,"In order to allow our Multi-CassKop controller to have access to k8s-cluster-2 from k8s-cluster-1, we are going to use\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/admiraltyio/multicluster-service-account/releases/tag/v0.6.1"}),"kubemcsa")," from\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://admiralty.io/"}),"Admiralty")," to be able to export secret from k8s-cluster-2 to k8s-cluster1"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubemcsa export --context=cluster2 --namespace cassandra-e2e cassandra-operator --as k8s-cluster2 | kubectl apply -f -\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This will create in current k8s cluster which must be k8s-cluster-1, the k8s secret associated to the\n",Object(r.b)("strong",{parentName:"p"},"cassandra-operator")," service account of namespace ",Object(r.b)("strong",{parentName:"p"},"cassandra-e2e")," in k8s-cluster2.\n/!\\ The Secret will be created with the name ",Object(r.b)("strong",{parentName:"p"},"k8s-cluster2")," and this name must be used when starting Multi-CassKop and\nin the MultiuCssKop CRD definition see below")),Object(r.b)("p",null,"This Diagram show how each component is connected:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/multi-casskop/multi-casskop.jpg",alt:"Multi-CassKop"}))),Object(r.b)("p",null,"MultiCassKop starts by iterrating on every contexts passed in parameters then it register the controller.\nThe controller needs to be able to interract with MultiCasskop and CassandraCluster CRD objetcs.\nIn addition the controller needs to watch for MultiCasskop as it will need to react on any changes that occured on\nthoses objects for the given namespace."),Object(r.b)("h2",{id:"install-casskop"},"Install CassKop"),Object(r.b)("p",null,"CassKop must be deployed on each targeted Kubernetes clusters."),Object(r.b)("p",null,"Add the Helm repository for CassKop"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ helm repo add casskop https://Orange-OpenSource.github.io/casskop/helm\n$ helm repo update\n")),Object(r.b)("p",null,"Connect to each kubernetes you want to deploy your Cassandra clusters to and install CassKop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ helm install --name casskop casskop/cassandra-operator\n")),Object(r.b)("h2",{id:"install-external-dns"},"Install External-DNS"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"External-DNS")," must be installed in each Kubernetes clusters.\nConfigure your external DNS with a custom values pointing to your zone and deploy it in your namespace "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"helm install -f /private/externaldns-values.yaml --name casskop-dns external-dns \n")),Object(r.b)("h2",{id:"install-multi-casskop"},"Install Multi-CassKop"),Object(r.b)("p",null,"Proceed with Multi-CassKop installation only when ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#pre-requisites"}),"Pre-requisites")," are fulfilled."),Object(r.b)("p",null,"Deployment with Helm. Multi-CassKop and CassKop shared the same github/helm repo and semantic version."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"helm install --name multi-casskop casskop/multi-casskop --set k8s.local=k8s-cluster1 --set k8s.remote={k8s-cluster2}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"if you get an error complaining that the CRD already exists, then replay it with ",Object(r.b)("inlineCode",{parentName:"p"},"--no-hooks"))),Object(r.b)("p",null,"When starting Multi-CassKop, we need to give some parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"k8s.local is the name of the k8s-cluster we want to refere to when talking to this cluster."),Object(r.b)("li",{parentName:"ul"},"k8s.remote is a list of other kubernetes we want to connect to.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Names used there should map with the name used in the MultiCassKop CRD definition)\nthe Names in ",Object(r.b)("inlineCode",{parentName:"p"},"k8s.remote")," must match the names of the secret exported with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#bootstrap-api-access-to-k8s-cluster-2-from-k8s-cluster-1"}),"kubemcsa")," command")),Object(r.b)("p",null,"When starting, our MultiCassKop controller should log something similar to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),'time="2019-11-28T14:51:57Z" level=info msg="Configuring Client 1 for local cluster k8s-cluster1 (first in arg list). using local k8s api access"\ntime="2019-11-28T14:51:57Z" level=info msg="Configuring Client 2 for distant cluster k8s-cluster2. using imported secret of same name"\ntime="2019-11-28T14:51:57Z" level=info msg="Creating Controller"\ntime="2019-11-28T14:51:57Z" level=info msg="Create Client 1 for Cluster k8s-cluster1"\ntime="2019-11-28T14:51:57Z" level=info msg="Add CRDs to Cluster k8s-cluster1 Scheme"\ntime="2019-11-28T14:51:57Z" level=info msg="Create Client 2 for Cluster k8s-cluster2"\ntime="2019-11-28T14:51:58Z" level=info msg="Add CRDs to Cluster k8s-cluster2 Scheme"\ntime="2019-11-28T14:51:58Z" level=info msg="Configuring Watch for MultiCasskop"\ntime="2019-11-28T14:51:58Z" level=info msg="Configuring Watch for MultiCasskop"\ntime="2019-11-28T14:51:58Z" level=info msg="Writing ready file."\ntime="2019-11-28T14:51:58Z" level=info msg="Starting Manager."\n')),Object(r.b)("p",null,"We see it successfully created a k8s client for each of our cluster.\nThen it do nothing, it is waiting for MultiCassKop objects."))}u.isMDXComponent=!0},182:function(e,t,s){"use strict";s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return d}));var a=s(0),n=s.n(a);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):l({},t,{},e)),s},p=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(s),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return s?n.a.createElement(d,l({ref:t},i,{components:s})):n.a.createElement(d,l({ref:t},i))}));function d(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<r;i++)o[i]=s[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,s)}m.displayName="MDXCreateElement"}}]);