function Use-PreInitConfig {
    Write-Output "You are now using the BCI CLI Setup Program. Lets get started!" 
    $value = Read-Host "Press 's', then 'ENTER' to get started Or 'n' to skip"
    if('s' -eq $value ) {


    function Use-TLITAdminAdd {
        $value = Read-Host "Press 'a', then 'ENTER' to start the 'TLIT-Admin' account setup step Or 'n' to skip"
        if ( 'a' -eq $value ) {
            $Password = ConvertTo-SecureString "PASSWORD_HERE" -AsPlainText -Force
            $params = @{
                Name        = 'ADMIN_GOES_HERE'
                Password    = $Password
                FullName    = 'TLIT-Admin'
                Description = 'TeamLogic IT admin account.'
            }
            New-LocalUser @params
            Add-LocalGroupMember -Group "Administrators" -Member "TLIT-Admin"
        } elseif ( 'n' -eq $value) {
            Write-Output "Local admin account add step will be skipped."
        } else {
            Use-TLITAdminAdd
        }
    }
    Use-TLITAdminAdd


    function Use-TLITAdminChange {
        $value = Read-Host "Press 'a', then 'ENTER' to start the 'TLIT-Admin' account name change and password step Or 'n' to skip"
        if ( 'a' -eq $value ) {
            Rename-LocalUser -Name "1" -NewName "TLIT-Admin"
            $Password = ConvertTo-SecureString 'PASSWORD_HERE' -AsPlainText -Force
            $UserAccount = Get-LocalUser -Name "TLIT-Admin"
            $UserAccount | Set-LocalUser -Password $Password
        } elseif ( 'n' -eq $value) {
            Write-Output "Admin name and password change will be skipped."
        } else {
            Use-TLITAdminChange
        }
    }
    Use-TLITAdminChange


    function Use-NewNamePWAdd {
        $value = Read-Host "Press 'a', then 'ENTER' to start the 'New User' account setup step Or 'n' to skip"
        if ( 'a' -eq $value ) {
            $name = Read-Host "Write the name of the user you wish to add, the press 'ENTER'"
            Write-Output "New Added Accout Name: $name"
            $pw = Read-Host "Write the password of the user you wish to add, the press 'ENTER'"
            $Password = ConvertTo-SecureString $pw -AsPlainText -Force
            Write-Output "New Added Account Password: $pw"
            $params = @{
                Name        = $name
                Password    = $Password
                FullName    = $name
                Description = 'New user account.'
            }
            New-LocalUser @params
            Add-LocalGroupMember -Group "Users" -Member $name
        } elseif ( 'n' -eq $value) {
            Write-Output "Local new user account add step will be skipped."
        } else {
            Use-NewNamePWAdd
        }
    }
    Use-NewNamePWAdd


    Set-Timezone -Id "Eastern Standard Time"
    Write-Output "Time set to EST zone."


    function Use-PCName {
        $value = Read-Host "Press 'c', then 'ENTER' to start the 'Use-PCName' change setup step Or 'n' to skip"
        if ( 'c' -eq $value ) {
            $New_PC_Name = Read-Host "Please enter the new computer name, then press 'ENTER'"
            $name_params = @{
                NewName = $New_PC_Name
            }
            Rename-Computer @name_params
        } elseif ( 'n' -eq $value) {
                Write-Output "The PC name change step will be skipped."
        } else {
            Use-PCName
        }
    }
    Use-PCName


    function Use-Restart {
        $value = Read-Host "Do you want to restart the computer so the changes will take effect? Press 'y' for yes OR 'n' for no, then 'ENTER'"
        if ( 'y' -eq $value ) {
            Restart-Computer 
        } elseif ( 'n' -eq $value ) {
            Write-Output "Ok, the computer will not restart now. Make sure to restart BEFORE installing NinjaOne, otherwise the computer name will be recorded as the default one."
        } else {
            Use-Restart
        }
    }
    Use-Restart






    function Use-Phase02 {
        $value = Read-Host "Press 'e' then 'ENTER' to start 'PHASE 02' setup or 'x', then 'ENTER'to skip this phase"
        if ( 'e' -eq $value ) {
            Write-Output "Opening the following pages and/or windows:"
            Write-Output "- Settings | Windows Update"
            Write-Output "- Adobe (for Acrobat Pro download page)"
            Write-Output "- MS Silverlight (Cnet 64-Bit verison)"
            Write-Output "- NinjaOne Installer (download link)"
            Write-Output "- Webroot (download AND key copied to clipboard)"
            Write-Output "Make certain that Windows is fully patched and upgraded to Windows 11 (if possible)."
            Start-Process "ms-settings:windowsupdate"
            Start-Process https://www.adobe.com/products/catalog.html?types=pf_252Fdesktop"&"types=pf_252Fmobile"&"types=pf_252Fweb
            Start-Process https://download.cnet.com/Microsoft-Silverlight-64-bit/3000-2378_4-75884713.html
            Start-Process https://www.webroot.com/us/en/home/products/wsa-installer-download

            Start-Process "https://app.ninjarmm.com/agent/installer/d8c0f2cf-acb0-4ff4-9726-c639b8d32c2a/boydconsultingincmainoffice-5.3.6900-windows-installer.msi"

            Write-Output "Webroot key added to the clipboard."
            Set-Clipboard -Value "KEY_GOES_HERE"
            function Use-RemoveFromBoard {
                $value = Read-Host "Press 'r' then enter to remove the key from the clipboard (you don't want the key to be floating around for others to use?)"
                if ( 'r' -eq $value ) {
                    Set-Clipboard -Value " "
                    Restart-Service -Name "cbdhsvc*" -force
                    Write-Output "Ok, the clipboard is now empty."
                } else {
                    Use-RemoveFromBoard
                }
            }
            Use-RemoveFromBoard
        } elseif ( 'x' -eq $value) {
            Write-Output "Ok, 'PHASE 02' will not execute."
        } else {
            Use-Phase02
        }
    }
    Use-Phase02


    Write-Output "FINALLY, configure MS Office 365:"
    Write-Output "- Log into 'Outlook'."
    Write-Output "- Log into 'Sharepoint' and 'sync' it (under 'Documents') with 'OneDrive'."
    Write-Output "- Log into 'OneDrive' and verify that 'Sharepoint' sync worked."


    function Use-Restart {
        $value = Read-Host "Do you want to restart the computer so the changes will take effect? Press 'y' for yes OR 'n' for no, then 'ENTER'"
        if ( 'y' -eq $value ) {
            Restart-Computer 
        } elseif ( 'n' -eq $value ) {
            Write-Output "Ok, the computer will not restart now."
        } else {
            Use-Restart
        }
    }
    Use-Restart


    } elseif ( 'n' -eq $value) {
        Write-Output "Ok, program will exit."
    } else {
        Use-PreInitConfig
    }

}
Use-PreInitConfig

