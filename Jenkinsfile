
//This flow takes the manual onboarding steps and automates them with the project-included python code.
def projectName = 'icp-onboarding-automated-workflow'
def task = ['ICP','MDP-UI']
def task1 = ['ICP','MDP-UI']
pipeline {
    agent any
    parameters {
        separator(name: "ICP", sectionHeader: "ICP")
        string(name: 'Dsa_Client_Bid', description: 'Input the DsaClientBid')
        string(name: 'Bucket_Name', description: 'Name of the bucket')
        string(name: 'Company_Name', description: 'Name of the company')
        string(name: 'Product_Name', description: 'Name of the product')
        string(name: 'Source_Path', description: 'Path of the file to th uploaded')
        booleanParam(name: 'Actively_Managed_client', description: 'Is this client actively managed ?')
        base64File 'THEFILE'

        separator(name: "MDP-UI",  sectionHeader: "MDP-UI")
        string(name: 'Dsa_Client_Bid', description: 'Input the DsaClientBid')
        string(name: 'Bucket_Name', description: 'Name of the bucket')
        string(name: 'Company_Name', description: 'Name of the company')
        string(name: 'Product_Name', description: 'Name of the product')
        string(name: 'Source_Path', description: 'Path of the file to th uploaded')
        booleanParam(name: 'Actively_Managed_client', description: 'Is this client actively managed ?')

    }
    stages {
        stage('Dev') {
            steps {
                echo 'vivek'
            }
        }
    }
}

