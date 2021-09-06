//This flow takes the manual onboarding steps and automates them with the project-included python code.
def projectName = 'icp-onboarding-automated-workflow'
def task = ['ICP','MDP-UI']
pipeline {
    agent any
    parameters {
        choice(name: "Task", description: "Task to be executed", choices: task)
    }
    stages {
        stage('Dev') {
            steps {
                echo 'vivek'
            }
        }
    }
}