(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),s=a(9),r=(a(0),a(182)),i={id:"3_quickstart",title:"Quickstart",sidebar_label:"Quickstart"},c={id:"multi-casskop/3_quickstart",title:"Quickstart",description:"## Create the MultiCassKop CRD",source:"@site/docs/multi-casskop/3_quickstart.md",permalink:"/casskop/docs/multi-casskop/3_quickstart",editUrl:"https://erdrix.github.io/casskop/edit/master/website/docs/multi-casskop/3_quickstart.md",sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"Pre-requisite",permalink:"/casskop/docs/multi-casskop/2_pre-requisite"},next:{title:"CircleCI build pipeline",permalink:"/casskop/docs/contributing/1_development/1_circle_ci_build_pipeline"}},l=[{value:"Create the MultiCassKop CRD",id:"create-the-multicasskop-crd",children:[]},{value:"Delete the Cassandra cluster2",id:"delete-the-cassandra-cluster2",children:[]}],o={rightToc:l};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"create-the-multicasskop-crd"},"Create the MultiCassKop CRD"),Object(r.b)("p",null,"You can deploy a MultiCassKop CRD instance."),Object(r.b)("p",null,"You can find an example in the ",Object(r.b)("inlineCode",{parentName:"p"},"multi-casskop/samples/multi-casskop.yaml")," file:"),Object(r.b)("p",null,"this is the structure of the file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: db.orange.com/v1alpha1\nkind: MultiCasskop\nmetadata:\n  name: multi-casskop-e2e\nspec:\n  # Add fields here\n  deleteCassandraCluster: true\n  base:\n    <The base of the CassandraCluster object you want Multi-CassKop to create>\n    ...\n    status: #<!!-- At this time the seedlist must be provided Manually. we know in advance the domain name\n            # it's the <pod-name>.<your-external-dns-domain>\n      seedlist:\n        - cassandra-e2e-dc1-rack1-0.my.zone.dns.net\n        - cassandra-e2e-dc1-rack1-1.my.zone.dns.net\n        - cassandra-e2e-dc2-rack4-0.my.zone.dns.net\n        - cassandra-e2e-dc2-rack4-1.my.zone.dns.net      \n  override:\n    k8s-cluster1: #<!!-- here is the name which must correspond to the helm argument `k8s.local`\n      spec: #<-- Here we defined overrides part for the CassandraCluster for the k8s-cluster1\n        pod:\n          annotations:\n            cni.projectcalico.org/ipv4pools: '[\"routable\"]' #\x3c!-- If using external DNS, change with your current zone\n        topology:\n          dc:\n          ...\n    k8s-cluster2: #<!!-- here is the name which must correspond to the helm argument `k8s.remote`\n      spec:\n        pod:\n          annotations:\n            cni.projectcalico.org/ipv4pools: '[\"routable\"]' #\x3c!-- If using external DNS, change with your current zone\n        imagepullpolicy: IfNotPresent\n        topology:\n          dc:\n          ...\n")),Object(r.b)("p",null,"You can create the Cluster with :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"k apply -f multi-casskop/samples/multi-casskop.yaml\n")),Object(r.b)("p",null,"Then you can see the MultiCassKop logs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),'time="2019-11-28T15:46:19Z" level=info msg="Just Update CassandraCluster, returning for now.." cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:46:19Z" level=info msg="Cluster is not Ready, we requeue [phase= / action= / status=]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:46:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:47:19Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:47:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing /status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:47:19Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:47:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:48:19Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:48:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:49:19Z" level=info msg="Just Update CassandraCluster, returning for now.." cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\ntime="2019-11-28T15:49:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\ntime="2019-11-28T15:50:19Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\ntime="2019-11-28T15:50:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\ntime="2019-11-28T15:51:19Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\ntime="2019-11-28T15:51:49Z" level=info msg="Cluster is not Ready, we requeue [phase=Initializing / action=Initializing / status=Ongoing]" cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\n')),Object(r.b)("p",null,"This is the sequence of operations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"MultiCassKop first creates the CassandraCluster in k8s-cluster1. "),Object(r.b)("li",{parentName:"ul"},"Then local CassKop starts to creates the associated Cassandra Cluster.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"When CassKop has created its Cassandra cluster, it updates CassandraCluster object's status with the phase=Running meaning that\nall is ok"))),Object(r.b)("li",{parentName:"ul"},"Then MultiCassKop start creating the other CassandraCluster in k8s-cluster2"),Object(r.b)("li",{parentName:"ul"},"Then local CassKop started to creates the associated Cassandra Cluster.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Thanks to the routable seed-list configured with external dns names, Cassandra pods are started by connecting to\nalready existings Cassandra nodes from k8s-cluster1 with the goal to form a uniq Cassandra Ring.")))),Object(r.b)("p",null,"In resulting, We can see that each clusters have the required pods."),Object(r.b)("p",null,"If we go in one of the created pods, we can see that nodetool see pods of both clusters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"cassandra@cassandra-e2e-dc1-rack2-0:/$ nodetool status\nDatacenter: dc1\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address         Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.100.146.150  93.95 KiB  256          49.8%             cfabcef2-3f1b-492d-b028-0621eb672ec7  rack2\nUN  10.100.146.108  108.65 KiB  256          48.3%             d1185b37-af0a-42f9-ac3f-234e541f14f0  rack1\nDatacenter: dc2\n===============\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address         Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  10.100.151.38   69.89 KiB  256          51.4%             ec9003e0-aa53-4150-b4bb-85193d9fa180  rack5\nUN  10.100.150.34   107.89 KiB  256          50.5%             a28c3c59-786f-41b6-8eca-ca7d7d14b6df  rack4\n\ncassandra@cassandra-e2e-dc1-rack2-0:/$\n")),Object(r.b)("h2",{id:"delete-the-cassandra-cluster2"},"Delete the Cassandra cluster2"),Object(r.b)("p",null,"If you have set the ",Object(r.b)("inlineCode",{parentName:"p"},"deleteCassandraCluster")," to true, then when deleting the ",Object(r.b)("inlineCode",{parentName:"p"},"MultiCassKop")," object, it will cascade the\ndeletion of the ",Object(r.b)("inlineCode",{parentName:"p"},"CassandraCluster")," object in the targeted k8s clusters. Then each local CassKop will delete their\nCassandra clusters."),Object(r.b)("p",null,"you can see in the MultiCassKop logs"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-log"}),'time="2019-11-28T15:44:00Z" level=info msg="Delete CassandraCluster" cluster=cassandra-e2e kubernetes=k8s-cluster1 namespace=cassandra-e2e\ntime="2019-11-28T15:44:00Z" level=info msg="Delete CassandraCluster" cluster=cassandra-e2e kubernetes=k8s-cluster2 namespace=cassandra-e2e\n')))}u.isMDXComponent=!0},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=s.a.createContext({}),u=function(e){var t=s.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=u(e.components);return s.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?s.a.createElement(b,c({ref:t},o,{components:a})):s.a.createElement(b,c({ref:t},o))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<r;o++)i[o]=a[o];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);