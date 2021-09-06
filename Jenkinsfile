//This flow takes the manual onboarding steps and automates them with the project-included python code.
def projectName = 'icp-onboarding-automated-workflow'
def task = ['ICP','MDP-UI']
def task1 = ['ICP','MDP-UI']
pipeline {
    agent any
    parameters {
        choice(name: "Task", description: "Task to be executed", choices: task)
    }
    parameters {
            choice(name: "Task1", description: "Task1 to be executed", choices: task1)
        }
    stages {
        stage('Dev') {
            steps {
                echo 'vivek'
            }
        }
    }
}