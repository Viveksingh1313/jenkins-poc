
//This flow takes the manual onboarding steps and automates them with the project-included python code.
def projectName = 'icp-onboarding-automated-workflow'
def task = ['ICP','MDP-UI']
def task1 = ['ICP','MDP-UI']
pipeline {
    agent any
    options([
    	parameters([
    		separator(name: "BUILD_ENVIRONMENT", sectionHeader: "Build Environment",
    			separatorStyle: "border-width: 0",
    			sectionHeaderStyle: """
    				background-color: #7ea6d3;
    				text-align: center;
    				padding: 4px;
    				color: #343434;
    				font-size: 22px;
    				font-weight: normal;
    				text-transform: uppercase;
    				font-family: 'Orienta', sans-serif;
    				letter-spacing: 1px;
    				font-style: italic;
    			"""
    		),
    		choice(name: "JAVA_VENDOR", choices: ["Coretto"]),
    		choice(name: "JAVA_VERSION", choices: ["11"]),
    		separator(name: "TEST_ENVIRONMENT", sectionHeader: "Test Environment",
    			separatorStyle: "border-width: 0",
    			sectionHeaderStyle: """
    				background-color: #dbdb8e;
    				text-align: center;
    				padding: 4px;
    				color: #343434;
    				font-size: 22px;
    				font-weight: normal;
    				text-transform: uppercase;
    				font-family: 'Orienta', sans-serif;
    				letter-spacing: 1px;
    				font-style: italic;
    			"""
    		),
    		choice(name: "OS", choices: ["Linux"]),
    		choice(name: "BROWSER", choices: ["Chrome"])
    	])
    ])
    stages {
        stage('Dev') {
            steps {
                echo 'vivek'
            }
        }
    }
}




//     parameters {
//         string(name: 'Dsa_Client_Bid', description: 'Input the DsaClientBid')
//         string(name: 'Bucket_Name', description: 'Name of the bucket')
//         string(name: 'Company_Name', description: 'Name of the company')
//         string(name: 'Product_Name', description: 'Name of the product')
//         string(name: 'Source_Path', description: 'Path of the file to th uploaded')
//         string(name: 'Destination_Path', description: 'Destination where file will be uploaded')
//         booleanParam(name: 'Actively_Managed_client', description: 'Is this client actively managed ?')
